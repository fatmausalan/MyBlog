angular.module('HelloBlog', [])
.controller('AppController', function($scope){
    console.log("ben geldiiim")
    writing1 = {
        title: 'First Blog Post',
        body: 'This is the first blog post. I try to do something. HELLO Hi',
        writer: 'fux00'
    }
    writing2 = {
        title: 'Second Blog Post',
        body: 'This is the second blog post. I try to do something. HELLO Hi',
        writer: 'fux01'
    }
    var writingList = [writing1, writing2];
    $scope.writingList = writingList;
})


