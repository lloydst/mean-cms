var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var HeaderSchema = new Schema({
    title: String,  // h1
    img: String,    // imgurl
    style: String   // classes
});
var Header = mongoose.model('Header', HeaderSchema);

module.exports = Header;