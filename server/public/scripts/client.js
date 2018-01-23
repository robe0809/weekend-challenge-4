console.log('js sourced');


const app = angular.module('galleryApp', []);

app.controller("pictureController", ['$http', function ($http) {
    let self = this;

self.comments = [];
// GET pictures from database
self.getPictures = function () {
    $http.get('/gallery')
    .then(function(response) {
        console.log(response.data);
        self.imageList = response.data;
    })
} 
self.getPictures(); // call get Pictures


// shows modal when picture is clicked
// hides modal when the x is clicked. 
    self.togglePictures = function (pics) {
        if(pics.showModal == true) {
            pics.showModal = false;
        } 
        else {
            pics.showModal = true;
        }
        console.log(pics.views);
    
        $http.put('/gallery/' + pics.id, pics)
        .then(function (response) {
            console.log('successful response', response);
        });
    }

// escapes the modal counts views;
    self.escape = function (pics) {
    if(pics.showModal == true) {
        pics.showModal = false;
        pics.views++;
    }
}

// keeps track of likes
    self.love = function (pics) {
        pics.likes++
        $http.put('/gallery/views/' + pics.id, pics)
        .then(function (response) {
            console.log('successful response', response);
        });
    };

// allows user to make a comment
    self.makeComment = function (info) {
        console.log(self.comments);
        console.log(info);
        self.comments.push(angular.copy(self.info));
        $http.post('/gallery', info) 
        .then(function(response) {
            console.log('successful post', response); 
            self.info = {}; 
        })
    };
    self.getComment = function () {
        $http.post('/gallery') 
        .then(function(response) {
            console.log('successful get', response.data); 
        })
    }
}])
