# react application
FROM node:18-alpine3.17 as build-stage

WORKDIR /user/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# nginx web server
FROM nginx:1.25.1-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /user/src/app/build /usr/share/nginx/html

