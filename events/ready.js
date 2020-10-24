const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");

module.exports = async client => {

    client.user.setActivity(`Gweep Creative`, { type: "PLAYING" });
  client.user.setStatus("online");
  console.log("Aktif!")
};

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 