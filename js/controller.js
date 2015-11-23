app.controller("PostController", function($scope, $rootScope){
  $scope.posts = [
    {
      url:"http://lorempixel.com/g/400/200/", 
      title:"My first post",
      author: "Ivy",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      up: 0,
      down: 0,
      date: "Sun Nov 15 2015 16:29:31 GMT-0800 (PST)",
      comment: {show: false, text:""},
      comments: ["nice!", "great!"]
    },
    {
      url:"http://lorempixel.com/g/400/200/", 
      title:"My second post",
      author:"Ivy",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      up: 0,
      down: 0,
      date: "Tue Nov 17 2015 16:29:31 GMT-0800 (PST)",
      comment: {show: false, text:""},
      comments: ["nice!", "great!"]
    }
  ];
  $scope.view = {};
  $scope.form = {};
  $scope.post = {};
  $scope.post.comment = {};
  $scope.addPost = function(newPost){
    newPost.up = 0;
    newPost.down = 0;
    newPost.date = new Date();
    newPost.comment = {
      show: false,
      text: ""
    };
    newPost.comments = [];
    $scope.posts.push(newPost);
    $scope.post = {};
    $scope.form = {};
    $scope.view.showform = false;
  };
  $scope.addComment = function(newComment, index){
    $scope.posts[index].comments.push(newComment.text);
    $scope.posts[index].comment.text = "";
    $scope.posts[index].comment.show = false;
  };
});