const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() -> utiliza javascript, funciona com todos os tipos de bancos SQL, sem precisar mudar sintaxe.
 * http://knexjs.org/
 */

app.use(cors());
/* Define quem pode acessar, se estivesse em produção poderia colocar o parametro de origin
  cors({
    origin: "http://meuapp.com"
})*/
app.use(express.json()); // Serve para dizer ao APP que se estará utilizando JSON nas requisições
app.use(routes);

app.listen(3333);
