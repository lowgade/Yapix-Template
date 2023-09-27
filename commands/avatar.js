const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'Muestra el avatar del usuario mencionado o el tuyo propio.',
  usage: '@usuario (opcional)',
  execute(message, args) {
    const targetUser = message.mentions.users.first() || message.author;

    const avatarEmbed = new EmbedBuilder()
      .setColor('#000000')
      .setTitle(`Avatar de ${targetUser.username}`)
      .setImage(targetUser.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setFooter({ text: `Solicitado por ${message.author.username}`, value: message.author.displayAvatarURL({ dynamic: true }) });

    message.channel.send({ embeds: [avatarEmbed] });
  },
};
