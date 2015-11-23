app.controller("PostController", function($scope, $rootScope){
  $scope.posts = [
    {
      url:"http://lorempixel.com/g/400/200/", 
      title:"My first post",
      author: "Ivy",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      up: 0,
      down: 0,
      date: "Sun Nov 15 2015 16:29:31 GMT-0800 (PST)"
    },
    {
      url:"http://lorempixel.com/g/400/200/", 
      title:"My second post",
      author:"Ivy",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      up: 0,
      down: 0,
      date: "Tue Nov 17 2015 16:29:31 GMT-0800 (PST)"
    }
  ];
  $scope.view = {};
  $scope.form = {};
  $scope.addPost = function(newPost){
    //creating a date object

    newPost.up = 0;
    newPost.down = 0;
    newPost.date = new Date();
    $scope.posts.push(newPost);
    $scope.post = {};
    $scope.form.newPost.$setPristine();
    $scope.view.showform = false;
  };
});