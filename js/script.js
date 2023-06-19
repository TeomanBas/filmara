angular.module('filmara', [])
.controller('kontrol', function($scope, $http) {

  var aramaIslemi;

  if ($scope.arananFilm == undefined) {
    $scope.arananFilm = "";
    veriGetir();
  }

  $scope.guncelle = function() {
    aramaIslemi = setTimeout(veriGetir, 100);
  };

  function veriGetir() {
    $http.get("http://www.omdbapi.com/?apikey=&t=" + $scope.arananFilm + "&tomatoes=true&plot=full")
      .success(function(response) {
        $scope.sonuc = response;
      });

    $http.get("http://www.omdbapi.com/?apikey=&s=" + $scope.arananFilm )
      .success(function(response) {
        $scope.ilgiliSonuclar = response;
      });
  }

  $scope.yenile = function(film) {
    $scope.arananFilm = film.Title;
    $scope.guncelle();
  }
      
});