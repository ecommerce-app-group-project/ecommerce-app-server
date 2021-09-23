# TODO

- Server:
  - Postgres for our database
  - knex.js for our database migrations, seeds and queries.
  - express.js for our JSON routes
- [x] Create a ecommerce-app-server folder
  - [x] Generate Express App
  - [x] git init
- [x] Convert Express App to JSON API
  - [x] Update error handler
  - [x] Add GET `/` endpoint
- [x] Create database
- [x] Initialize knex project
  - [x] Install knex and pg
  - [x] Create knexfile.js
- [x] Create product table migration
- [ ] Seed product table with sample data
- [ ] Add api folder and create/mount router
- [ ] Connect to the database
  - [ ] Create database connection file
  - [ ] Create a queries file
- [ ] List all records with GET /api/v1/products

  - [ ] Create query
  - [ ] Create route

- [ ] List all records in /index.html
  - [ ] AJAX Request to GET /products
  - [ ] Append to DOM
  - [ ] Each product links to /product.html?id=:id
  - [ ] Display a link to /create.html
- [ ] Show one record with GET /api/v1/products/:id
  - [ ] Validate id
  - [ ] Create query
  - [ ] Create route
- [ ] Show one record in /product.html?id=:id
  - [ ] Parse query string to get id
  - [ ] AJAX Request to GET /products/:id
  - [ ] Append to DOM
  - [ ] Display link to /edit.html?id=:id
- [ ] Create a record with POST /api/v1/products
  - [ ] Create route
  - [ ] Validate product!
  - [ ] Create query
- [ ] Create a record in /new.html
  - [ ] Display a form with input boxes for all fields
  - [ ] Display a button to submit the creation of the resource
    - [ ] Validate all inputs
    - [ ] POST /products
    - [ ] Successful creation should redirect to /product.html?id=:id
- [ ] Update a record with PUT /api/v1/products/:id
  - [ ] Create route
  - [ ] Validate id
  - [ ] Validate updates
  - [ ] Create query
- [ ] Update one record in /product.html?id=:id
  - [ ] Display a form with input boxes for all fields
  - [ ] Display a button to submit the update of the resource
    - [ ] Validate all inputs
    - [ ] PUT /products/:id
    - [ ] Successful update should redirect to /product.html?id=:id
- [ ] Delete a record with DELETE /api/v1/products/:id
  - [ ] Create route
  - [ ] Validate id
  - [ ] Create query
- [ ] Delete a record
  - [ ] Add a delete button to the /product.html page
    - [ ] DELETE /products/:id
    - [ ] Successful deletion should redirect to index.html
- [ ] Deploy server to Heroku
  - [ ] Signup and login to heroku
  - [ ] Install the heroku CLI
  - [ ] Create a heroku app
  - [ ] Push to heroku
  - [ ] View heroku logs
- [ ] Add Postgres DB to Heroku
  - [ ] Add postgres addon
  - [ ] Add production connection to knex
  - [ ] Run migrations on production DB
  - [ ] Run seeds on production DB
