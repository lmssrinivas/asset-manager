/**
 * Created by mlingolu on 4/2/17.
 */


app.factory('AssetServices',function ($http,$q) {


    return {
        getAssets:function(){

            return $http.get('/assets').then(response =>{
                console.log(response);
                return response.data;
            })
        },

        createAsset:function(data){

            return $http.post('/assets',data).then(response =>{
                console.log(response);
                return response.data;
            })
        },
        deleteAsset:function(id){

            return $http.delete(`/assets/${id}`).then(response =>{
                console.log(response);
                return response.data;
            })
        }
    }
})