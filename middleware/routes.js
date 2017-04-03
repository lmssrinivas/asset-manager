var assets = require('../controllers/assetsController');

module.exports = function(router){
    router.post('/assets', assets.createOne);
    router.get('/assets', assets.readAll);
    router.get('/assets/:id', assets.readOne);
    router.put('/assets/:id', assets.updateOne);
    router.delete('/assets/:id', assets.deleteOne);
}
