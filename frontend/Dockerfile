FROM node:8-alpine as builder
RUN mkdir -p /src/app/docrestaurant
RUN npm install
RUN ng build
RUN npm i -g @angular/cli@1.6.1
COPY dist /src/app/docrestaurant
COPY deploy-package.json /src/app/docrestaurant/package.json
COPY deploy-server.js /src/app/docrestaurant/deploy-server.js
WORKDIR /src/app/docrestaurant

RUN npm rebuild node-sass
RUN npm i -g cordova
RUN npm i -g ionic@latest && ionic --no-interactive config set -g daemon.updates false
RUN npm rebuild node-sass

EXPOSE 4200
CMD [ "node", "deploy-server"]
