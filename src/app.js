const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const User = require("./userSchema");
const bcrypt = require("bcrypt");
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../src")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 6000000,
    },
  })
);

app.get("/", (req, res) => {

  res.sendFile(path.join(__dirname, "../views", "homepage.html"));
});
app.get("/logIn", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "logIn.html"));
});
app.get("/signUp", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "signUp.html"));
});

let reqSession 

app.post("/logIn", (req, res) => {
  User.findOne(
    { username: req.body.username, password: req.body.password },
    (err, user) => {
      // console.log(req.body)
      if (user === null) {
        res.send("incorrect");
      } else {
        
        cb = user.checkBox;
        req.session.user = user;
        req.session.loggedIn = true;
        req.session.save();
        reqSession=req.session;
        res.redirect("/user");
      }
    }
  );
});

app.post("/signUp", (req, res) => {
  User.findOne(
    { username: req.body.username, password: req.body.password },

    (err, user) => {
      if (user === null) {
        var user = User.create({
          username: req.body.username,
          password: req.body.password,
          checkBox: {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0,
            14: 0,
            15: 0,
          },
        });
        res.redirect("/login");
      } else {

        res.redirect("/");
      }
    }
  );
});

app.get("/user", (req, res) => {
  // console.log(req.session.user.username);

  if (req.session.loggedIn) {
    User.findOne(
      {
        username: req.session.user.username,
        password: req.session.user.password,
      },
      (err, user) => {
        // console.log(req.body)
        if (user != null) {
          req.session.user = user;
          res.render("user", {
            userLoggedIn: user.username,
            chkbxs: user.checkBox,
          });
        } else {
          res.redirect("/");
        }
      }
    );
  } else {
    res.redirect("/");
  }
});

let cb;

app.post("/user", async (req, res) => {
  if (req.session.loggedIn) {
    cb = await req.session.user.checkBox;
    cb[await req.body.idx] = await req.body.check;
    // if(await req.body.check==1){
    User.findOneAndUpdate(
      {
        username: req.session.user.username,
        password: req.session.user.password,
      },
      { checkBox: cb }
    )
      .then(() => {
        console.log("db updated");
      })
      .catch((err) => {
        console.log(err);
      });
     // }
  } else {
    res.redirect("/");
  }
});

app.get("/ide", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "ide.html"));
});

app.get("/contribute", (req, res) => {
  if (req.session.loggedIn) {
    res.render("contribute", { userLoggedIn: req.session.user.username });
  } else {
    res.redirect("/");
  }
});

let url;
let i;

app.get("/vtab", (req, res) => {
  res.render("vtab", { URL: url, i: i });
});

app.post("/vtab", (req, res) => {
  if (req.session.loggedIn) {
    url = req.body.url;
    i = req.body.idx;
    console.log(url);
    res.send("hello");
  } else {
    res.redirect("/");
  }
});

app.post("/logout", async (req, res) => {
  let changedCB = req.body;
  for (let i = 0; i < Object.keys(changedCB).length; i++) {
    if (changedCB[i] == 1) {
      if (cb[i] == 1) {
        cb[i] = 0;
      } else {
        cb[i] = 1;
      }
    }
  }

  User.findOneAndUpdate(
    {
      username: await reqSession.user.username,
      password: await reqSession.user.password,
    },
    { checkBox: cb }
  )
    .then(() => {
      console.log("db updated");
    })
    .catch((err) => {
      console.log(err);
    });

    req.session.loggedIn = false;
    req.session.destroy();
   res.redirect("/");
});

mongoose
  .connect(
    "mongodb+srv://izhaan9802:izzy9802@fullstackroadmap.0q4v5zc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("port connected");
});
