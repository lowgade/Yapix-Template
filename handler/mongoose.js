const { connect } = require('mongoose');
const config = require('../config.js');
const colors = require('colors'); 

module.exports = {
  name: 'mongoose',
  execute() {
    const mongoDBURI = process.env.MONGODB_URI || config.handler.mongodb.uri;

    connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log(colors.yellow('[YP] Conectado exitosamente a MongoDB'));
      })
      .catch(error => {
        console.log(colors.yellow(`[YP] Error al conectarse a MongoDB: ${error}`));
      });
  },
};
