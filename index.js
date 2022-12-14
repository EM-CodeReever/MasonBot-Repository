// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const { Token } = require('./config.json');

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready to GO!');
});

client.on("interactionCreate", async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const commandName = interaction.commandName;
	// const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
	
})

// Login to Discord with your client's token
client.login(Token);