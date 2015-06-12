var songControllers = angular.module('songControllers', []);

songControllers.controller('getAlbumCtrl', ['$scope', '$http',
        function($scope, $http) {
 $http.get('http://api.spotify.com/v1/albums/4g1vG8tToNsh49I0fTMY97').success(function(data) {
            $scope.album = data;
            $scope.listing = $scope.album.tracks;
          });
          
        }]);        

