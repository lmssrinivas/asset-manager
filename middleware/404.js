module.exports = function *(next){
    if(!this.body){
        this.status = 404;
    }
    yield next;
};