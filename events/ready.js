const chalk = require("chalk"); //Bir Hata Olursa lyrax#0001 DM Veya Destek Talebi Açın - BotClub Sevgilerlerimle <3
const moment = require("moment");
const Discord = require("discord.js");

module.exports = async client => {

    client.user.setActivity(`Codeal`, { type: "PLAYING" });
  client.user.setStatus("online");
  console.log("Aktif!")
};

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 

//Bir Hata Olursa lyrax#0001 DM Veya Destek Talebi Açın - BotClub Sevgilerlerimle <3