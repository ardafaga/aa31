const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://media.giphy.com/media/mBkM18U5OMSkTcDmeu/giphy.gif', 'https://media.giphy.com/media/RGRzukK0YNlQbZEUVP/giphy.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**CloudUP Ana Menüsüne Hoş Geldin Dostum :innocent:
${client.user} Kullanırken \`@CloudUP\` rolünü en yukarıda tutunuz.**
**
🐝 \`${client.ayarlar.prefix}sunucu-tema\`

> Kayıt, Kutulu \`&\` Kutusuz, Diğer, Tag rol,
> Koruma, Say, Aktiflik, Mesaj tag


🦋 \`${client.ayarlar.prefix}sunucu-kur\` Menüsün de neler var?

> Mute, Karantina, Ban, Toplu rol, Sayaç \`&\` Oto 
> rol, Kısıtlamalar

🔥 \`${client.ayarlar.prefix}davet\` Menüsün de neler var?

> Botun Davet Linki
> Destek Sunucumuzun Davet Linki

💸 İninal Barkod NO: \`123456789123\`
💸 Papara Hesap NO: \`1234567891\`


💐 CloudUP Youtube Eğitim: :)
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};