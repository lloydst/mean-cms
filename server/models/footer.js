var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var FooterSchema = new Schema({
    columns: {
        type: Array,
        content: {//this one isn't actually used as a query its just so it repeats a object within the columns array
            icon: String,
            url: String,
            name: String
        }
    }

});
var Footer = mongoose.model('Footer', FooterSchema);

module.exports = Footer;