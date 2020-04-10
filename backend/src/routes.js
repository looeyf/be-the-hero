const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

/**
 * Query Params: Parametros nomeados enviados na rota após '?' (filtros, paginação) -> localhost:3333/users?name=Luis&idade=21 (request.query)
 * Route Params: Parâmetros utilizados para identificar recursos -> localhost:3333/users/1 (request.params)
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 * Params usa o Request e o response é a resposta do banco.
 */

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
