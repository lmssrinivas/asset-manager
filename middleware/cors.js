module.exports = function *(next){
  this.set('Access-Control-Allow-Origin', '*');
  this.set('Access-Control-Allow-Credentials', true);
  this.set('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS');
  this.set('Access-Control-Allow-Headers', 'Content-Type');
  yield next;
};