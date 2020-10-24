const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const log = message.guild.channels.find(c => c.id === "720651997082288238"); //buraya kayıt log id koyun
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
    const embed = new Discord.RichEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .addField(`Şablonu Gönderen \n`, `<@!${c.user.id}>`)
    .addField(`Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`Yeni isim\n`, ``)
    .setFooter("RabeL | kayıt sistemi")
    .setColor("#000000")
    log.send(embed)
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "k",
  usage: "k"
};
   