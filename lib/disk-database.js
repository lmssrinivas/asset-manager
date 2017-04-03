var fs = require('fs');

module.exports = function(config){
    
    config = config || {};
    var dbPath = config.dbPath || process.cwd() + "/db/";

    var _createIfNotExists = function(filename){
        fs.existsSync(dbPath+filename, function (exists) {
            if(!exists){
                fs.closeSync(fs.openSync(dbPath+filename, 'w'));
            }
        });
    };

    var _readJson = function(collection){
        return JSON.parse(fs.readFileSync(dbPath+collection+'.json', 'utf8'));
    };

    var _writeJson = function(collection, jsonString){
        return fs.writeFileSync(dbPath+collection+'.json', jsonString, 'utf8');
    };

    var _singular = function(str){
        var end = str.length - 1;
        return (str[end].toLowerCase() == 's') ? str.slice(0, -1) : str;
    };

    var _load = function(collection){
        _createIfNotExists(collection+'.json');
        var arr;
        try {
            arr = _readJson(collection);
        } catch(e) {
            arr = []; // ugly fallback if file was empty, invalid json, or didn't exist (which is bad)
        }
        return arr;
    };

    return {

        get: function(collection, id){
            var json = _load(collection);
            if(id){
                json = json.filter(function(i){return i.id==id});
                json = json[0];
            }
            return json;
        },

        save: function(obj, collection, id){
            if(!obj || !collection){
                throw new Error("shoot that doesn't work");
            }
            var matched = false;
            var collectionArr = _load(collection);
            if(id){
                collectionArr.forEach(function(x, i, arr){
                    if(x.id == id){
                        matched = true;
                        arr[i] = obj;
                    }
                });
            } else {
                var idsArr = collectionArr.map(function(x){return parseInt(x.id);});
                var newId;
                if(idsArr.length){
                    newId = Math.max.apply( Math, idsArr );
                    newId++;
                } else {
                    newId = 0;
                }
                var newObj = { id: newId.toString() };
                delete obj.id;
                Object.assign(newObj, obj);
                collectionArr.push(newObj);
                matched = true; // not really but it works for us
            }
            if(matched){
                var jsonString = JSON.stringify(collectionArr);
                _writeJson(collection, jsonString);
                return newObj || obj;
            } else {
                throw new Error("could not match id or insert new doc!");
            }
        },

        delete: function(collection, id){
            if(!collection || !id){
                throw new Error("shoot that doesn't work");
            }
            var matched = false;
            var collectionArr = _load(collection);
            var numRemoved = 0;
            if(id){
                collectionArr.forEach(function(x, i, arr){
                    if(arr[i - numRemoved].id == id){
                        matched = true;
                        arr.splice((i - numRemoved), 1);
                        numRemoved++;
                    }
                });
            } else {
                throw new Error("you have to pass an id to delete something");
            }
            if(matched){
                var jsonString = JSON.stringify(collectionArr);
                _writeJson(collection, jsonString);
                return { status: 'success', message: `${_singular(collection)} deleted`};
            } else {
                return null;
            }
        }
    }
};