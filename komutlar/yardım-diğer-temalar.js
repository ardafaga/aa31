const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();
 
module.exports.run = (client, message, args) => { 
let pages = [
`**Sunucu Şablanları;**\n\n<a:ucankalpler:735102535974780968>  Yardım menüsünü görmeden önce <@!${client.user.id}> 'i kullandığınız için sizlere teşekkür ederiz.\n\n<a:kalp:734885134251327540>  \` ${client.ayarlar.prefix}tasarım-tema \` **Tasarım Sunucusu Şablonu Atar**\n\n<a:coder:734885134800519288>  \` ${client.ayarlar.prefix}bot-satış-tema \` **Bot Satış Sunucusu Şablonu Atar**.\n\n<:developer:734885133684965428>  \` ${client.ayarlar.prefix}kod-tema \` **Kod Sunucusu Şablonu Atar** \n\n \` ${client.ayarlar.prefix}uptime-support-tema \` Uptimeli Support Sunucusu Şablonu Atar\n\n \` ${client.ayarlar.prefix}botlist-tema \` Bot List Şablonu Atar\n\n **Yardım Menüsüne ➡ Geçmek İçin Emojiye Basın**`,
`**Sunucu Şablanları;**\n\n<a:ucankalpler:735102535974780968>  \`${client.ayarlar.prefix}j4j-tema \` J4J Sunucu Şablonu Atar. \n\n<a:kalp:734885134251327540>  \` ${client.ayarlar.prefix}site-satış-tema \` **Site Satış Sunucusu Şablonu Atar**\n\n<a:coder:734885134800519288>  \` ${client.ayarlar.prefix}youtube-satış-tema \` **Youtube/Twitch Şablonu Atar**.\n\n<:developer:734885133684965428>  \` ${client.ayarlar.prefix}zula-tema \` **Zula Klan Sunucusu Şablonu atar.** \n\n \` ${client.ayarlar.prefix}mta-tema \` MTA Roleplay Sunucusu Şablonu atar. \n\n \` ${client.ayarlar.prefix}botlist-tema \` Bot List Şablonu Atar\n\n **Yardım Menüsüne ➡ Geçmek İçin Emojiye Basın**`,
`**Sunucu Şablanları;**\n\n<a:ucankalpler:735102535974780968>  Yardım menüsünü görmeden önce <@!${client.user.id}> 'i kullandığınız için sizlere teşekkür ederiz.\n\n<a:kalp:734885134251327540>  \` ${client.ayarlar.prefix}tasarım-tema \` **Tasarım Sunucusu Şablonu Atar**\n\n<a:coder:734885134800519288>  \` ${client.ayarlar.prefix}bot-satış-tema \` **Bot Satış Sunucusu Şablonu Atar**.\n\n<:developer:734885133684965428>  \` ${client.ayarlar.prefix}kod-tema \` **Kod Sunucusu Şablonu Atar** \n\n \` ${client.ayarlar.prefix}uptime-support-tema \` Uptimeli Support Sunucusu Şablonu Atar\n\n \` ${client.ayarlar.prefix}botlist-tema \` Bot List Şablonu Atar\n\n **Yardım Menüsüne ➡ Geçmek İçin Emojiye Basın**`,
`**Sunucu Şablanları;**\n\n<a:ucankalpler:735102535974780968>  Yardım menüsünü görmeden önce <@!${client.user.id}> 'i kullandığınız için sizlere teşekkür ederiz.\n\n<a:kalp:734885134251327540>  \` ${client.ayarlar.prefix}tasarım-tema \` **Tasarım Sunucusu Şablonu Atar**\n\n<a:coder:734885134800519288>  \` ${client.ayarlar.prefix}bot-satış-tema \` **Bot Satış Sunucusu Şablonu Atar**.\n\n<:developer:734885133684965428>  \` ${client.ayarlar.prefix}kod-tema \` **Kod Sunucusu Şablonu Atar** \n\n \` ${client.ayarlar.prefix}uptime-support-tema \` Uptimeli Support Sunucusu Şablonu Atar\n\n \` ${client.ayarlar.prefix}botlist-tema \` Bot List Şablonu Atar\n\n **Yardım Menüsüne ➡ Geçmek İçin Emojiye Basın**`,
`**Sunucu Şablanları;**\n\n<a:ucankalpler:735102535974780968>  Yardım menüsünü görmeden önce <@!${client.user.id}> 'i kullandığınız için sizlere teşekkür ederiz.\n\n<a:kalp:734885134251327540>  \` ${client.ayarlar.prefix}tasarım-tema \` **Tasarım Sunucusu Şablonu Atar**\n\n<a:coder:734885134800519288>  \` ${client.ayarlar.prefix}bot-satış-tema \` **Bot Satış Sunucusu Şablonu Atar**.\n\n<:developer:734885133684965428>  \` ${client.ayarlar.prefix}kod-tema \` **Kod Sunucusu Şablonu Atar** \n\n \` ${client.ayarlar.prefix}uptime-support-tema \` Uptimeli Support Sunucusu Şablonu Atar\n\n \` ${client.ayarlar.prefix}botlist-tema \` Bot List Şablonu Atar\n\n **Yardım Menüsüne ➡ Geçmek İçin Emojiye Basın**`,
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/app-icons/522870338867167254/c82cd947b45d9d3a0f34ba8aaf0422ee.png')
.setAuthor(`Servers Template Yardım Menüsü`, client.user.avatarURL)
.setFooter(`Sayfa ${page} / ${pages.length}`)
.setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
msg.react('⬅')
.then(r => {
msg.react('➡')
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
forwards.on('collect', r => {
if(page === pages.length) return;
page++;
embed.setDescription(pages[page-1]);
embed.setColor('RANDOM')
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
})
backwards.on('collect', r => {
if(page === 1) return;
page--;
embed.setColor('RANDOM')
embed.setDescription(pages[page-1]);
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
}) 
})
})
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['diğer-temalar', 'other-templates'],
  permLevel: 0
}

exports.help = {
  name: 'diğer-temalar'
};
