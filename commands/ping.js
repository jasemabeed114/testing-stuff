const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  var embed = new Discord.RichEmbed()
  .setAuthor("Bot made by: JustNela#6666")
  .setThumbnail(message.author.avatarURL)
  .setDescription(":GWtestDiscord: [Support Server](https://discord.gg/4DAZqsR) \n :GWtestOnline: [Invite me by clicking here](https://discordapp.com/api/oauth2/authorize?client_id=534122074579664896&permissions=8&scope=bot)")
  .addField("Ping!", ":ping_pong: **Pong!**");
  message.channel.send(embed)
}

module.exports.help = {
  name: "ping",
  aliases: []
}