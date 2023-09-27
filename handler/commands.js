const fs = require('fs');
const colors = require('colors');

module.exports = (client) => {
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);

    console.log('[YP] Comando '.cyan + `${command.name}`.cyan + ' cargado exitosamente'.cyan);
  }
};
