const mongoose = require('mongoose');

const workScehma = mongoose.Schema({
	// pageId: {type: Number},
    imageintro: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: false},
    importantcolor: {type: String},
    latest: {type: Boolean},
    pagetitle: {type: String},
    details: {type: String},
    previous: {type: Number, required: false},
    next: {type: Number, required: false},
    summery: {type: String, required: false}
})

module.exports = mongoose.model('Works', workScehma);