const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Grava novas ongs no banco
routes.post('/ongs', OngController.create);
//Lista as ongs do banco
routes.get('/ongs', OngController.index);

//Grava novos casos
routes.post('/incidents', IncidentController.create);
//Lista novos casos
routes.get('/incidents', IncidentController.index);
//Deleta um caso
routes.delete('/incidents/:id', IncidentController.delete);

//Lista os casos por ong
routes.get('/profiles', ProfileController.index);

//Rota de Login
routes.post('/sessions', SessionController.create);

// exportar variável de dentro do arquivo
module.exports = routes;