;(function (models) {
    'use strict';

    var mongoose = require( 'mongoose' );

    var feedSourceSchema = require('./feedSource.schema');

    models = {
        feedSource: mongoose.model('feedSource', feedSourceSchema)
    };

})(module.exports);
