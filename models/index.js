

    var mongoose = require( 'mongoose' );

    var feedSourceSchema = require('./feedSource.schema');
    var feedFormats = require('./feedFormat');
    var feedCategories = require('./feedCategory');

    module.exports = {
        feedSource: mongoose.model('feedSource', feedSourceSchema),
        feedFormats: feedFormats,
        feedCategories: feedCategories
    };


