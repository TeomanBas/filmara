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
      url: "api_request_url",
      data: {
        film:$scope.arananFilm,
        tip:"t",
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    request1.success(function(response) {
      $scope.sonuc= response; 
    });

    var request2 = $http({
      method: "post",
      url: "api_request_url",
      data: {
        film:$scope.arananFilm,
        tip:"s",
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    request2.success(function(response) {
      $scope.ilgiliSonuclar= response; 
    });
  }

  $scope.VCounter = function() {
    var request = $http({
      method: "post",
      url: "http://192.168.100.207/filmara/htdocs/api/",
      data: {
        visitquery:"visitor",
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    request.success(function(response) {
      $scope.visitor= response; 
    });

  }
  $scope.VCounter();
  
  $scope.yenile = function(film) {
    $scope.arananFilm = film.Title;
    $scope.guncelle();
  }
      
});
