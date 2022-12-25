const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderSchemma = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        default: ''
    },
    abbr: {
        type: String,
        required:true
    },
    featured: {
        type: Boolean,
        default:false      
    }
});

var Leaders = mongoose.model('Leader', leaderSchemma);

module.exports = Leaders;