FROM node:latest

WORKDIR /usr/src/app/perfanalytics

COPY . .

RUN npm install

RUN npm run build

RUN npm install --prefix dashboard/

RUN npm run build --prefix dashboard/

CMD [ "npm", "start" ]

EXPOSE 3000