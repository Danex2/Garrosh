const Discord = require("discord.js");
const schedule = require("./../schedule.json");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    let newActivity = args[0];
    let newThing = args[1];
    schedule[newActivity] = newThing
    fs.writeFile("./schedule.json", JSON.stringify(schedule), (err) => console.error);

}

module.exports.help = {
    name: "sched"
}

//this command will list the current raid schedule and should have the ability to edit the schedule from the command
