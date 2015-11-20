app.controller("PostController", function($scope, $rootScope){
  $scope.posts = [
    {
      url:"http://lorempixel.com/g/400/200/", 
      title:"My first post",
      author: "Ivy",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      url:"http://lorempixel.com/g/400/200/", 
      title:"My second post",
      author:"Ivy",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];
  $scope.view = {};
  $scope.form = {};
  $scope.up = 0;
  $scope.down = 0;
  $scope.addPost = function(newPost){
    $scope.posts.push(newPost);
    $scope.post = {};
    $scope.form.newPost.$setPristine();
    $scope.view.showform = false;
  };
});