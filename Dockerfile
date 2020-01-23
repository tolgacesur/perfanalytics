FROM node:latest

WORKDIR /usr/src/app/perfanalytics

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000