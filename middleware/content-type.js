module.exports = function *(next){
    this.response.type = 'application/json';
    yield next;
};