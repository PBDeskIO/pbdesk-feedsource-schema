var mongoose = require( 'mongoose' );

 var feedSourceSchema = require('./feedSource.schema');
 var feedFormats = require('./feedFormat');
 var feedCategories = require('./feedCategory');

 module.exports.feedSourceModel =  mongoose.model('FeedSource', feedSourceSchema);
 module.exports.feedFormats = feedFormats;
 module.exports.feedCategories = feedCategories; 
     



