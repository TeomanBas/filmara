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
    var request1 = $http({
      method: "post",
      url: "http://192.168.100.207/filmara/apiserver/",
      data: {
        film:$scope.arananFilm,
        tip:"t",
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    request1.success(function(response) {
      $scope.sonuc= response; 
    });

    var request2 = $http({
      method: "post",
      url: "http://192.168.100.207/filmara/apiserver/",
      data: {
        film:$scope.arananFilm,
        tip:"s",
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    request2.success(function(response) {
      $scope.ilgiliSonuclar= response; 
    });
  }
  
  $scope.yenile = function(film) {
    $scope.arananFilm = film.Title;
    $scope.guncelle();
  }
      
});