const express = require('express');
const cors   = require('cors');
const routes = require('./routes'); //pq não é um pacote e sim um arquivo


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/** Rota / Recurso */

/**
 * Metodos Http:
 * 
 * GET    :  Busca/Listar informações do back-end
 * POST   :  Cria uma informação no back-end
 * PUT    :  Altera uma informação no back-end
 * Delete :  Delete uma informação no back-end  
 */

 /** Tipos de parâmetros 
  * 
  * Query Params : Parâmetros nomeados enviados na rota, após o "?" (Filtros/Paginação)
  * Route Params : Parâmetros utilizados para identificar recursos
  * Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /** Bando de dados 
  * 
  * SQLite
  * 
  * Driver: select * from users ....
  * Query Builder: table('users').select('*').where()....
 */




