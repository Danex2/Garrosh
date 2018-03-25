const Discord = require("discord.js");
const schedule = require("./../schedule.json");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setColor("#b34d4d")
  .addField("Monday", schedule['monday'])
  .addField("Tuesday", schedule['tuesday'])
  .addField("Wednesday", schedule['wednesday'])
  .addField("Thursday", schedule['thursday'])
  .addField("Friday", schedule['friday'])
  .addField("Saturday", schedule['saturday'])
  .addField("Sunday", schedule['sunday'])
  message.channel.send({embed});
}

module.exports.help = {
    name: "raiddays"
}

//this command will show raid days
