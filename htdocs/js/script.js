angular.module('filmara', [])
.controller('kontrol', function($scope, $http) {

  var aramaIslemi;

  if ($scope.arananFilm == undefined) {
    $scope.arananFilm = "";
    veriGetir();
    VCounter();
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
  function VCounter() {
    var request3 = $http({
      method: "post",
      url: "http://192.168.100.207/filmara/htdocs/api/",
      data: {
        visitquery:"visitor",
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    request3.success(function(response) {
      $scope.visitor= response;
       
    });
  }
  
  $scope.yenile = function(film) {
    $scope.arananFilm = film.Title;
    $scope.guncelle();
  }
      
});
