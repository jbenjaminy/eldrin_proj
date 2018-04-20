# Panc-eat-eria #

 ***Search for local panciteria shops, filtered by distance from your location.***

## Technologies ##
 * [Node.js](https://nodejs.org/en/) - A backend JavaScript runtime.
 * [React.js](https://facebook.github.io/react/) - A frontend JavaScript library.
 * [Redux](http://redux.js.org/) - "A predictable state container for JavaScript apps."
 * [Redux-Thunk](https://github.com/gaearon/redux-thunk) - "Thunk middleware for Redux."
 * [React-Router](https://github.com/ReactTraining/react-router) - "A complete routing library for React."
 * [PostgreSQL](https://www.postgresql.org/) - "A powerful, open source object-relational database system."

## Getting Started ##
* __Clone git repository:__
 ```
  $ git clone https://github.com/jbenjaminy/eldrin_proj.git
 ```

* __Install Dependencies:__
 ```
  $ npm install

 ```
_or_

 ```
  $ yarn install
 ```

* __Compile Project:__
 ```
  $ npm run build
 ```

* __Start Server:__
 ```
  $ npm run start
 ```
_or_

* __Start Server in Dev Mode:__
 ```
  $ npm run watch
 ```

## Setting up the database and backend server.
1. Install PG using Homebrew:
 ```
  $ brew install postgresql
 ```

2. Install PostgreSQL node-module using NPM:
 ```
  $ npm install --save pg
 ```

3. Launch PG using Homebrew:
 ```
  $ brew services start postgresql
 ```

4. Create new db:
 ```
  $ createdb [DB_NAME]
 ```
_the db name is specified in the connection file (pg/connect.js) as 'panc-eat-eria'_

5. Connect model tables (schema.sql) db:
 ```
  $ psql -d [DB_NAME] < [PATH_TO_SCHEMA.SQL]
 ```

6. Access database:
 ```
  $ psql -d [DB_NAME]
 ```

## Querying the PG database from the command line: ##

* CREATE:
 ```
  $ insert into [TABLE] ([COLUMN_1], [COLUMN_2]) values ('[VALUE_1]', '[VALUE_2]');
 ```

* READ:
 ```
  $ select * from [TABLE];
 ```
_or_
 ```
  $ select [VALUE] from [TABLE];
 ```
_or_
 ```
  $ select [COLUMN_1], [COLUMN_2] from [TABLE] where [COLUMN_1]='[VALUE_1]';
 ```

* UPDATE:
 ```
  $ update [TABLE] set [COLUMN_1]='[VALUE_1]' where [VALUE_2]='[COLUMN_2]';
 ```

* DELETE:
 ```
  $ delete from [TABLE] where [COLUMN_1]='[VALUE_1]';
 ```
