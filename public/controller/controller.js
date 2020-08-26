angular.module('HelloBlog', [])
.controller('AppController', function($scope, $http){
    $http.get('/writingList').then(function(response){
        console.log("aldımmmmm");
        $scope.writingList = response.data;
    })
    console.log("ben geldiiim")
   
})


