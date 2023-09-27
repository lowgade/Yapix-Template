const colors = require('colors');

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(colors.red(`[YP] Conexión establecida como ${client.user.tag}`));
    client.user.setPresence({ activities: [{ name: 'Yapix Studios' }], status: 'dnd' });
  },
};
