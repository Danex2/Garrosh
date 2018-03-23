const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("heyo")
}

module.exports.help = {
    name: "char"
}

//this command will return basic info about a player's character / could include raid progression stats