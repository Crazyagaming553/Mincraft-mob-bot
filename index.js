const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = '<'
client.once('ready', () => {
    console.log('Bot is ready')
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send('Commands: ')
    }
    if(command === 'creeper'){
        message.channel.send('https://minecraft.gamepedia.com/Creeper')
    }
    if(command === 'cow'){
        message.channel.send('https://minecraft.gamepedia.com/Cow')
    }
    if(command === 'bat'){
        message.channel.send('https://minecraft.gamepedia.com/Bat')
    }
    
})




client.login(process.env.token)