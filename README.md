# Express.js / MongoDB / Docker Starter Kit

As its name suggests, this repo is a docker boilerplate to help you kickstart
your future node.js projects. It uses MongoDB as the database engine and
supports persistence. (You won't lose any data when killing /
restarting the services)

## Installation

1. Fork or clone this repo

_Note: if you decide to clone this repo, make sure to change the remote url so
that it points to your own repository. Otherwise you won't be able to push your
modifications_

2. Create a `.env` file with the following variables

```bash
PORT=PORT
MONGO_DB_URI="mongodb://database:27017/yourtestdb"
NODE_ENV="development|production"
```

3. Start the containers
```bash
# first navigate to the directory where your project is located, then run:
docker-compose up --build
```

4. Now visit localhost:3000 and you should be good to go !

## Directory Structure

- `config`: holds the database config options. (You can add configuration files
  for other services such as AWS ...)
- `lib`: This is where your helper functions will be stored along with any
  custom middleware you write for your endpoints
- `models`: contains your database schema declarations
- `routes`: is a collection of your endpoints (divided in separate router files)
- `tests`: for all your tests (this project uses jest as the main test runner)
- `views`: any template you might want to render to the users.

## Todo

- Find a cool name
- Add support for nginx
- Create a deployment script
