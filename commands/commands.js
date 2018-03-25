//all this does is print out the current commands
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("#b34d4d")
    .addField("Current commands", "prefix, prog, roster, char, mythic, patch, sched")
    message.channel.send({embed});
}

module.exports.help = {
    name: "commands"
}
