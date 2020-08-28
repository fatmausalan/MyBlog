angular.module('HelloBlog', [])
.controller('AppController', function($scope, $http){
   $scope.changeT = function(){
       
       if(document.getElementById("theme").href == "http://localhost:3000/css/dark.css"){
            document.getElementById("theme").href="css/light.css"

       }else{
            document.getElementById("theme").href="css/dark.css"
       }
       
   }        
  

    /*$scope.addButton = function(){
        console.log($scope.test);
    }
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
                $scope.newW.imageSrc = e.target.result
            };
           reader.readAsDataURL(input.files[0]);
           // console.log(input.files[0]);
        }
    }
    
   $scope.addWriting = function(){
        //$scope.newW.imageSrc = globalImg; // burayı dene unutma 
        console.log($scope.newW);

        $http.post('/writingList',$scope.newW).then(function(response){
            //console.log(response.data);
            refresh();
        });
   }*/
   
   
  
})


