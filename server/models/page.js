var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var PageSchema = new Schema({
    // status: ['edit', 'live', 'hidden'] // live can be the old version edit should always be a sligtly older version it could be done with 'tags as well'
    title: {type:String, unique:true},
    article: {
        type: Array,
        sections: {
            type: {
                enum: [
                    'paragraph',
                    'paragraphTextLeft',
                    'paragraphTextRight'
                    // these can be and should be expanded when new 'templates are added'
                ]
            },
            src: String,
            text: String
            // form:
        }
    }
});
var Page = mongoose.model('Page', PageSchema);

module.exports = Page;