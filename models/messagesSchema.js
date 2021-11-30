const mongoose = require('mongoose')

const messagesSchema = new mongoose.Schema({
  GuildID: {
    type: String, require: true
  },
  Welcome: {
    type: String, require: true, default: " "
    },
  });

  const Mmodel = mongoose.model("messagesSchema", messagesSchema);

  module.exports = Mmodel;