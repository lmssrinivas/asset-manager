/**
 * Created by mlingolu on 4/2/17.
 */


var app = angular.module('assets',['ngMaterial']);

app.controller('AssetsController',['$scope','AssetServices','$mdDialog',function ($scope,AssetServices,$mdDialog) {


    $scope.getAsserts = function () {

        AssetServices.getAssets().then(function(response){
            $scope.assets = response;
        })
    };

    $scope.getAsserts();

    var data;
    $scope.renderAsset = function (asset) {

        data = asset;

        $mdDialog.show({
            controller: assetModalController,
            controllerAs: 'modal',
            templateUrl: 'js/asset-modal.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true

        });
    };

    function assetModalController($mdDialog) {


        var vm = this;

        vm.asset = data;

    }



    $scope.newAsset={};
    $scope.createAsset = function () {

        var data = $scope.newAsset;

        AssetServices.createAsset(data).then(function (response) {

            if(response){
                $scope.assets.push(response);
                $scope.newAsset={};
            }
        })
    }

    $scope.deleteAsset = function (asset) {


        AssetServices.deleteAsset(asset.id).then(function (response) {

            if(response){

                let index = $scope.assets.findIndex(function (val) {
                    return val.id == asset.id
                });
                $scope.assets.splice(index,1);

            }
        })
    }

}]);

app.filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}]);