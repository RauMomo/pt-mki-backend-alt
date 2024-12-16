const parse = require("pg-connection-string").parse;
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_URL"),
      
      ssl: {
        rejectUnauthorized: false, // Disable strict SSL validation (optional based on your use case)
      },
    },
    debug: false,
  },
});
