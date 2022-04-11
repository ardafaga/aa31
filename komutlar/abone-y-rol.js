let database = require("quick.db")//Bir Hata Olursa lyrax#0001 DM Veya Destek Talebi Açın - BotClub Sevgilerlerimle <3
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abone-y-rol @rol`)
  
  
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-y-rol'],
  perm: 0
}
exports.help = {
  name: 'abone-yetkili-rol'
}

exports.play = {
  kullanım: '.abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'//Bir Hata Olursa lyrax#0001 DM Veya Destek Talebi Açın - BotClub Sevgilerlerimle <3
}