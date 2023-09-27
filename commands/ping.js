module.exports = {
    name: 'ping',
    description: 'Responde con "Pong!"',
    execute(message, args) {
      message.reply('Pong!');
    },
  };