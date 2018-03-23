const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("heyo")
}

module.exports.help = {
    name: "sched"
}

//this command will list the current raid schedule and should have the ability to edit the schedule from the command