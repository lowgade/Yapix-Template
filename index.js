const Discord = require('discord.js');
const config = require('./config.js');
const mongooseHandler = require('./handler/mongoose.js');
const fs = require('fs');
const colors = require('colors');

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.GuildEmojisAndStickers,
    ],
    partials: [Discord.Partials.User, Discord.Partials.Channel, Discord.Partials.GuildMember, Discord.Partials.Message, Discord.Partials.Reaction]

})

mongooseHandler.execute();

client.commands = new Map();

const loadCommands = require('./handler/commands.js');
loadCommands(client);

const prefix = config.prefix;

const guildEventHandler = require('./handler/events.js');
guildEventHandler(client);

const readyEvent = require('./events/Client/ready.js');
client.once('ready', () => {
    readyEvent.execute(client);
});

const guildEventFiles = fs.readdirSync('./events/Guild').filter(file => file.endsWith('.js'));

for (const file of guildEventFiles) {
    const event = require(`./events/Guild/${file}`);
    client.on(event.name, (...args) => event.execute(...args, client, config));
}

client.login(config.token);