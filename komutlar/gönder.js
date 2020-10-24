const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {

    const gönderildi = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .addfield
    .setColor("#000000")
    message.channel.send(gönderildi)
 
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
    const embed = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .addField(`Şablonu Gönderen \n`, `<@!${message.author.user.id}>`)
    .addField(`Gönderilen Şablon\n`, `${nick}`)
    .addField(`Açıklama \n`, `${yas}`)
    .setFooter("RabeL | kayıt sistemi")
    .setColor("#000000")
    client.channels.get("769217541632557094").send(embed);
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
   