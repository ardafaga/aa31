const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {

    const nick = args[1];
    const yas = args[2];
    if(!nick) return message.channel.send("Bir Şablon girin.")
  
    const gönderildi = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .setDescription(`Desteklerinizden Dolayı Teşekkür Ederiz. Uygun görülürse Bota Eklenicektir.`)
    .setColor("#2bfe0f")
    message.channel.send(gönderildi)

    const embed = new Discord.MessageEmbed()
    .setAuthor("Yeni Şablon Gönderildi!!")
    .addField('Şablonu Gönderen \n', '<@!${message.author.user.id}>')
    .addField(`Gönderilen Şablon\n`, `${nick}`)
    .addField(`Açıklama \n`, `${yas}`)
    .setFooter("Serves Template | Hazır Şablon sistemi")
    .setColor("#000000")
    client.channel.cache.get("769217541951586307").send(embed);
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["g","send"],
  permLevel: 0
};
exports.help = {
  name: "gönder",
  description: "k",
  usage: "gönder"
};
   