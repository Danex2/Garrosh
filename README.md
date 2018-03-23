# Garrosh
world of warcraft discord bot

## Current commands  
* char - character stats  
* mythic - highest mythic+ key for character
* prog - a guilds current raid progress  
* roster - current raid roster  
* sched - current raid schedule  

## Make your own version
```git clone git@github.com:Danex2/Garrosh.git```  
then inside of the main folder\ 
```npm install```\  
[Grab a blizzard dev key from here](https://dev.battle.net/)  (none of the commands work currently, will update on how to add key to project)

[Sign into discord and create an app and get the discord token](https://discordapp.com/developers/docs/intro)\  
Inside the main folder create a botSettings.json file and place this inside of it  
```
{
    "token": "PLACE TOKEN HERE",
    "prefix": "make whatever prefix you want here Ex. (!, >, #, ^)"
}
```
then just run the bot by running `nodemon bot.js`\
that should be it, if you have any problems dm me on discord. dane#9013