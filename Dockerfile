FROM node:18.13.0
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]