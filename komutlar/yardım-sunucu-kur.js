const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://media.giphy.com/media/mBkM18U5OMSkTcDmeu/giphy.gif', 'https://media.giphy.com/media/RGRzukK0YNlQbZEUVP/giphy.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Servers Template Ana Menüsüne Hoş Geldin Dostum :innocent:
${client.user} Kullanırken Botun Özel Rolünü rolünü en yukarıda tutunuz.**
**
🐝 \`${client.ayarlar.prefix}public-sunucu-kur\` Public Sunucu Kurar.

🦋 \`${client.ayarlar.prefix}nitro-sunucu-kur\` Nitro Sunucusu Kurar.

🦋 \`${client.ayarlar.prefix}j4j-sunucu-kur\` Nitro Sunucusu Kurar.

🦋 \`${client.ayarlar.prefix}oyun-sunucu-kur\` Nitro Sunucusu Kurar.

🦋 \`${client.ayarlar.prefix}normal-sunucu-kur\` Nitro Sunucusu Kurar.

🔥 \`${client.ayarlar.prefix}davet\` Menüsün de neler var?

> Botun Davet Linki
> Destek Sunucumuzun Davet Linki

💸 İninal Barkod NO: \`4002180346745\`
💸 Papara Hesap NO: \`1642201859\`


💐 Youtube Destek için [TIKLA](https://youtube.com/GweepCreativeOfficial) :)
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucu-kur', 'sunucu-yardım'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kur'
};