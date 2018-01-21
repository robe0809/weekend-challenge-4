console.log('js sourced');


const app = angular.module('galleryApp', []);

app.controller("pictureController", ['$http', function ($http) {
    let self = this;

self.comments = [];

self.getPictures = function () {
    $http.get('/gallery')
    .then(function(response) {
        console.log(response.data);
        self.imageList = response.data;
    })
}
self.getPictures();

// excapes the modal without counting it as a view;
self.escape = function (pics) {
    if(pics.showModal == true) {
        pics.showModal = false;
        pics.views++;
    }
}

// shows modal when picture is clicked
// hides modal when the x is clicked. 
// counts views
    self.togglePictures = function (pics) {
        if(pics.showModal == true) {
            pics.showModal = false;
            pics.views++
        } else {
            pics.showModal = true;
        }
        console.log(pics.views);
    
        $http.put('/gallery/' + pics.id, pics)
        .then(function (response) {
            console.log('successful response', response);
        });
    }
    // keeps track of likes
    
    self.love = function (pics) {
        pics.likes++
        $http.put('/gallery/views/' + pics.id, pics)
        .then(function (response) {
            console.log('successful response', response);
        }
        )}

    // allows user to make a comment
    self.makeComment = function (person, comment) {
        self.newComment = {
            person: person,
            comment: comment
        };
        self.comments.push(self.newComment);
    };


}])
