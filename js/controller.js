app.controller("postController", function($scope, $rootScope){
  $scope.posts = [
    {
      url:"http://lorempixel.com/g/400/200/", 
      title:"My first post",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      url:"http://lorempixel.com/g/400/200/", 
      title:"My first post",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
      
  ];
  $scope.view = {};
  $scope.addPost = function(){
    $scope.posts.push($scope.post);
  };
});