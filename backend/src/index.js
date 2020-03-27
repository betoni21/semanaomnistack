const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/*
    Métodos HTTP:
    GET: Buscar/listar uma informação do back-end
    POST: Criar uma informação do back-end
    PUT: Alterar uma informação do back-end
    DELETE: deletar uma informação do back-end
*/
/*
    * Tipos de parâmetros:
    *
    * Query Params: Parâmetros nomeados enviados por rota após "?"(Filtros, paginação)
    * Router Params: Parâmetros utilizados para identificar recursos
    * Request Body: 

*/
/* 
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL server
    NoSQL: MongoDB, couchDB, etc
*/
