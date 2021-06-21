const swaggerJsDoc = require('swagger-jsdoc');
module.exports = swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: '1.0.0',
    },
  },
  apis: [`./src/api/routes/UserRoute.js`],
};

module.exports = swaggerDocs = swaggerJsDoc(swaggerOptions);
