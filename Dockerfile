FROM node:6.9.1
RUN mkdir -p /src/app/docrestaurant
COPY dist /src/app/docrestaurant
COPY deploy-package.json /src/app/docrestaurant/package.json
COPY deploy-server.js /src/app/docrestaurant/deploy-server.js
WORKDIR /src/app/docrestaurant
RUN npm install
EXPOSE 4200
CMD [ "node", "deploy-server"]
