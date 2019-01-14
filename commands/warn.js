const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   let embed = new Discord.RichEmbed()
   .setAuthor("Warn announce.")
   .addField("Warned:", message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]))
   .addField("Moderator:", message.author.username)
   .setThumbnail(message.author.avatarURL)
   .addField("Reason:", args.join(" ").slice(22));
   
   message.channel.send(embed)
}

module.exports.config = {
    name: "warn",
    aliases: []
}
