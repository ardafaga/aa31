const Discord = require("discord.js");
exports.run = function(client, message, args) {
const log = message.guild.channels.find(c => c.id === "720651997082288238"); //buraya kayıt log id koyun
    let type = args.slice(0).join(" ");
    if (type.length < 1)
      return message.channel.send(
        new Discord.MessageEmbed().setDescription("Kullanım: v!sikayet <Şikayet>")
      );
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("Şikayetiniz bildirildi.");
    message.channel.send(embed);
  
    const embed2 = new Discord.MessageEmbed()
    .setAuthor("Kayıt Yapıldı")
    .addField(`Kaydı yapılan\n`, `${message.user.tag}`)
    .addField(`Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`Yeni isim\n`, `${messa}`)
    .setFooter("RabeL | kayıt sistemi")
    .setColor("#000000")
    log.send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["report"],
  permLevel: 0,
  kategori: "genel"
};

exports.help = {
  name: "şikayet",
  description: "Kullanıcıyı şikayet eder.",
  usage: "şikayet <Şikayet>"
};