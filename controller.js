var songControllers = angular.module('songControllers', []).config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
});


songControllers.controller('getAlbumCtrl', ['$scope', '$http',
        function($scope, $http) {
 $http.get('http://api.spotify.com/v1/albums/4g1vG8tToNsh49I0fTMY97').success(function(data) {
            $scope.album = data;
            $scope.songArr = ['https://embed.spotify.com/?uri=spotify:track:6iirwBDRrZYduYum9bDlHI', 
            				  'https://embed.spotify.com/?uri=spotify:track:4QUBEtx8JLogudEkFk4M1R', 
            				  'https://embed.spotify.com/?uri=spotify:track:32XJDXntXRbGaTW97ckD9P', 
            				  'https://embed.spotify.com/?uri=spotify:track:7EsoMka4qOVcN8jOh4fv9V', 
            				  'https://embed.spotify.com/?uri=spotify:track:4nsrGVhD9OQamKiKXCnt9d', 
            				  'https://embed.spotify.com/?uri=spotify:track:6QxDKRLnQRimykoQKhpuht', 
            				  'https://embed.spotify.com/?uri=spotify:track:1cYDOpMYxjEN7xLiEqAA5C', 
            				  'https://embed.spotify.com/?uri=spotify:track:6MqRn6PuVyUeDx8spLwSX4'];
            console.log($scope.songArr);


          });

        }]);        
 


