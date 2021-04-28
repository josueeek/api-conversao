import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json'

import  ClassesController from './controllers/ClassesController';


const routes = express.Router();

const classesController = new ClassesController();




routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/', function(req, res) {
 res.redirect('/api-docs');
});

routes.get('/fahrenheit/:valor/celsius', classesController.celsius);
routes.get('/celsius/:valor/fahrenheit', classesController.fahrenheit);
routes.get('/temperatura/fahrenheitparacelsius/:valor', classesController.fahrenheitparacelsius);


routes.get('*', function(req, res){
  res.status(404).send('404: File Not Found');
});


export default routes;