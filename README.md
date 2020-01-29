## Perfanalytics

[![CircleCI](https://circleci.com/gh/tolgacesur/perfanalytics.svg?style=shield&circle-token=ea38b337920a6426b6daf419a6bc48c21cc285cc)](https://circleci.com/gh/tolgacesur/perfanalytics)

This is a restful API and a dashboard which saves data, posted from ​ PerfAnalytics.JS​ and returns time
specific filtered data and shows perf related metrics in a visualized way.

**Note :** This app is hosted on heroku free web dyno that dyno receives no web traffic in a 30-minute period, it will sleep. If a sleeping web dyno receives web traffic, it will become active again after a short delay. [more details](https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping)

### About

#### Restful API

- Written using typescript
- It can handle min 200 RPS
- It returns data between specific dates or only last 30 minutes

### Endpoints

API base URL: `https://perfanalytics.herokuapp.com`

Method | Endpoint | Return
------------ | ------------- | -------------
GET | /  | HTML

Method | Endpoint | Return
------------ | ------------- | -------------
GET | /api/metrics/{token} | JSON


Method | Endpoint | Body | Return
------------ | ------------- | ----------- | -------------
POST | /api/metrics/ | JSON | JSON


### Load Tests

We used [this](https://www.npmjs.com/package/loadtest) npm package for load testing.


```shell
sudo npx loadtest -c 1 -n 1000 --rps 200 http://127.0.0.1:3000
```

![][request1]

#### Dashboard

- Written using React
- It shows the last 30 minutes or between specific dates of TTFB, FCP, Dom Load, and Window Load as in charts


### Development

#### Server

Check the `.env.dev` file before development and make sure that the `API_BASE_URL` variable is set correctly.

#### Dashboard

The files of the dashboard are in the `dashboard` folder. Before developing, make sure that `REACT_APP_API_BASE_URL` variable in `dashboard/.env.development` is set correctly.

#### Ready?

Change the file path of `/home/tolga/perfanalytics/` in docker.compose.yml with the project directory that in your local evironment and you can run the following commands.

```shell
docker-compose build

docker-compose -f docker.compose.yml up
```

### Deployment

We use **CircleCI** for deployment. After the build and tests are run, the created docker image is pushed to heroku.

#### heroku deploy

```shell

heroku login

heroku container:login

heroku container:push web --app perfanalytics

heroku container:release web --app perfanalytics

```