const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Tipos de Parametros;
 * Query Params: Parâmetros nomeados enviados na rota apos "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

 /**
  * Driver: SELECT * FROM users
  * Query BUilder: table('users').select('*').where()
  */

app.listen(4444, function(){
    console.log("Servidor rodando na url http://localhost:4444");
})