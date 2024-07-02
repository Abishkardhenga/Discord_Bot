const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require("dotenv")

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
dotenv.config()

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);