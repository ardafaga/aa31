const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const log = message.guild.channels.find(c => c.id === "769217541632557094"); //buraya kayıt log id koyun

      const gönderildi = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .setColor("#000000")
    message.channel.send(gönderildi)
  
    const c = message.author
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
    const embed = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .addField(`Şablonu Gönderen \n`, `<@!${c.user.id}>`)
    .addField(`Gönderilen Şablon\n`, `${nick}`)
    .addField(`Açıklama \n`, `${yas}`)
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
   