var config = {
    dbPath: process.env.CC_DBPATH ? process.env.CC_DBPATH : process.cwd() + '/db/'
};
var disk = require('../lib/disk-database')(config);

var collectionName = 'assets';

module.exports = {

    createOne: function *(next){
        this.body = disk.save(this.request.body, collectionName); yield next;
    },

    readAll: function *(next){
        this.body = disk.get(collectionName); yield next;
    },

    readOne: function *(next){
        this.body = disk.get(collectionName, this.params.id); yield next;
    },

    updateOne: function *(next){
        this.body = disk.save(this.request.body, collectionName, this.params.id); yield next;
    },

    deleteOne: function *(next){
        this.body = disk.delete(collectionName, this.params.id); yield next;
    }
}