
                (async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(err);
                  });
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
const os = require("os-utils");
const lyricsFinder = require('lyrics-finder');
const { DiscordTogether } = require('discord-together');
                    require('events').EventEmitter.defaultMaxListeners = 50;
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);
s4d.client.discordTogether = new DiscordTogether(s4d.client);         
                    var arguments2, command;


await s4d.client.login('ODk3ODUxNTQ0MTIzMzU1MTM3.YWbraQ.zv4dUdeML3Gz0fKTTuumaH0yNZI').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == '>youtube') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "youtube").then(async invite => {
        s4dmessage.channel.send({content:String((invite.code))});

      })
    }catch(err){
      s4dmessage.channel.send({content:String('You are not in voice channel!')});

    };
  } else if (command == '>poker') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "poker").then(async invite => {
        s4dmessage.channel.send({content:String((invite.code))});

      })
    }catch(err){
      s4dmessage.channel.send({content:String('You are not in voice channel!')});

    };
  } else if (command == '>chess') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "chess").then(async invite => {
        s4dmessage.channel.send({content:String((invite.code))});

      })
    }catch(err){
      s4dmessage.channel.send({content:String('You are not in voice channel!')});

    };
  } else if (command == '>betrayal') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "betrayal").then(async invite => {
        s4dmessage.channel.send({content:String((invite.code))});

      })
    }catch(err){
      s4dmessage.channel.send({content:String('You are not in voice channel!')});

    };
  } else if (command == '>fishing') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "fishing").then(async invite => {
        s4dmessage.channel.send({content:String((invite.code))});

      })
    }catch(err){
      s4dmessage.channel.send({content:String('You are not in voice channel!')});

    };
  } else if (command == '>lettertile') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "lettertile").then(async invite => {
        s4dmessage.channel.send({content:String((invite.code))});

      })
    }catch(err){
      s4dmessage.channel.send({content:String('You are not in voice channel!')});

    };
  } else if (command == '>wordsnack') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "wordsnack").then(async invite => {
        s4dmessage.channel.send({content:String((invite.code))});

      })
    }catch(err){
      s4dmessage.channel.send({content:String('You are not in voice channel!')});

    };
  } else if (command == '>doodlecrew') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "doodlecrew").then(async invite => {
        s4dmessage.channel.send({content:String((invite.code))});

      })
    }catch(err){
      s4dmessage.channel.send({content:String('You are not in voice channel!')});

    };
  }

});

                    return s4d
                    })();
                    