const fs = require('fs');
const colors = require('colors');

module.exports = (client) => {
    fs.readdirSync('./events').filter((file) => file.endsWith('.js')).forEach((event) => {
        try {
            const eventModule = require(`../events/${event}`);
            if (typeof eventModule.execute !== 'function') {
                console.error(`[YP] Error al cargar el evento ${event}: La propiedad 'execute' no es una función`);
            } else {
                eventModule.execute(client);
            }
        } catch (error) {
            console.error(`[YP] Error al cargar el evento ${event}: ${error.message}`);
        }
    });

    const mensaje = '[YP] Eventos cargados exitosamente'.green;

    console.log(mensaje);
}
