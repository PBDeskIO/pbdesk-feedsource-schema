module.exports = function (mongoose) {
    return {
        feedSourceModel: require('./feedSource.schema')(mongoose),
        feedFormats: require('./feedFormat'),
        feedCategories: require('./feedCategory')
    };
}



     



