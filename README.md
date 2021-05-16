# issue-tracker
Simple issue tracker, repo for both frontend and backend.

### Getting started

To configure and run this project, follow instruction below:
```shell
# clone repo
git clone https://github.com/pilotpirxie/issue-tracker.git

# open client
cd issue-tracker/client

# install client deps
yarn

# yarn start for development
yarn start

# to build and generate static files
yarn build

# to run server, open server directory
cd issue-tracker/server

# install server deps
yarn

# run server with nodemon
yarn dev

# or directly with node/pm2 with
yarn start
```

### Setup database
To setup database connection run with following environment variables:
```shell
# database name, default "issue_tracker"
DB_NAME

# username, default "postgres"
DB_USER

# password, default "mysecretpassword"
DB_NAME

# host, default "localhost"
DB_HOST

# port, default "5432"
DB_HOST
```
or open server/config/sequelize.js to change directly. 
Sequelize will synchronize database schema at first run, however
you can use migration/schema.sql to manually setup database.


### Prerequisites

* PostgreSQL
* Node > 12
* Yarn

