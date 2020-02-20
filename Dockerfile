FROM node:latest
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY . /usr/src/app/
RUN npm install
EXPOSE 5000
CMD npm start