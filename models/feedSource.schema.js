var Schema = require('mongoose').Schema;


var feedSourceSchema = new Schema({
	title: { type: String, required: true },
    subTitle: String,
    rssUrl: String,
    sourceUrl: String,
    itemCount: {type: Number, default: 20 },
    feedType: String,
    image1Url: String,
    image2Url: String,
    reverse: Boolean,
    tags: [String]
});

module.exports = feedSourceSchema;