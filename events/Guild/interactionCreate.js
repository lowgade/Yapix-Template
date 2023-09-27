const colors = require('colors');

module.exports = {
  name: "interactionCreate",
  execute(interaction) {
    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.execute(interaction);
    } catch (error) {
      console.error(colors.magenta(`[YP] Error en la ejecución del comando: ${error}`));
      interaction.reply({ 
        content: "Ocurrió un error inesperado al procesar tu solicitud",
        ephemeral: true 
      });
    }
  },
};
