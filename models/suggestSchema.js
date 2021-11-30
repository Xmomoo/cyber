const mongoose = require('mongoose');

const suggestSchema = new mongoose.Schema({
 GuildID: { type: String, require: true },
 Suggest: { type: String, require: true },
});

const Smodel = mongoose.model("suggestSchema", suggestSchema);

module.exports = Smodel;