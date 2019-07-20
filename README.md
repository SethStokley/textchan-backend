# textchan-backend
The backend to Textchan~

## Structure
`routes/` - Contains routes which pass right over to controllers
`controllers/` - Handles route logic, returns data and completes request through calling services
`services/` - Contain most business logic, e.g., calling data access layers, api calls, etc
`db/` - Defines migrations and seeds for the database

## Installation
Ensure the following dependencies are installed:
* Node
* npm
* Postgres

Navigate into the project directory, run npm install to install node modules the project uses, then configure the two files in `config/`. Ensure knexfile.js's `connection` property is correct for connecting to your postgres database. Run the application using `node src/textchan.js`.