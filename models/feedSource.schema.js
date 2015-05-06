var Schema = require('mongoose').Schema;
var feedFormats = require('./feedFormat');
var feedCategories = require('./feedCategory');
    
var feedSourceSchema = new Schema({
	title: { type: String, required: true },
    description: String,
    category: {
        type: String, 
        default: 'General', 
        enum: feedCategories
        },
    rssUrl: String,
    sourceUrl: String,
    itemCount: {type: Number, default: 20 },
    feedFormat: {
        type: String, 
        default: 'Rss', 
        enum: feedFormats
        },
    image1Url: String,
    image2Url: String,
    reverse: Boolean,
    tags: [String]
});

module.exports = feedSourceSchema;