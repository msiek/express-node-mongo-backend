//Item.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define collection and schema for Items
const Item = new Schema ({
    item: {
        type: String
    },
},{
    collection: 'items'
});

module.exportrs = mongoose.model('Item', Item);
