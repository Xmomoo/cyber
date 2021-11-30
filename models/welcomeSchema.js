const mongoose = require('mongoose')

const welcomeSchema = new mongoose.Schema({
  GuildID: {
    type: String, require: true
  },
  Welcome: {
    type: String, require: true
  },
});

const Wmodel = mongoose.model("welcomeSchema", welcomeSchema);

module.exports = Wmodel;