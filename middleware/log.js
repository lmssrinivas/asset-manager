module.exports = function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log(this.status + ' ' + this.method + ' ' + this.url + ' - ' + ms + 'ms');
}
