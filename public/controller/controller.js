angular.module('HelloBlog', [])
.controller('AppController', function($scope, $http){
    var globalImg;
    var refresh = function(){
        $http.get('/writingList').then(function(response){
            $scope.writingList = response.data;
          //  $scope.newW = "";
        })
    }
    refresh();
    
    $scope.getImage =function(input){
        if(input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = function(e){
                document.getElementById("blah").src = e.target.result
                globalImg = e.target.result
            };
           reader.readAsDataURL(input.files[0]);
           // console.log(input.files[0]);
        }
    }
    
   $scope.addWriting = function(){
        $scope.newW.imageSrc = globalImg;
        console.log($scope.newW);

        $http.post('/writingList',$scope.newW).then(function(response){
            //console.log(response.data);
           // refresh();
        });
   }
  
})


