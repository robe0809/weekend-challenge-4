console.log('js sourced');


const app = angular.module('galleryApp', []);

app.controller("pictureController", ['$http', function ($http) {
    let self = this;
    // self.imageList = [
    //     {
    //     description:'Cait and I, during a stop on our drive along the apache trail through the superstition mountains',
    //     img: 'assets/appacheTrailAZ.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'Santana and I looking out over the Black Canyon river gorge near Montrose, CO',
    //     img: 'assets/blackCanyonNP.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'Santana the first day we brought him home.',
    //     img: 'assets/firstDaySantana.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'Santana and I during the first big snow of the year in Evergreen, CO',
    //     img: 'assets/firstSnowSantana.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'Santana on top of Lions Head in Staunton State Park near Conifer, CO',
    //     img: 'assets/floppyEars.JPG',
    //     count: 0
    //     },
    //     {
    //     description: 'Our little family at Horsetooth resevoir in near Fort Collins, CO',
    //     img: 'assets/horsetooth.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'Myself, along with two of my closest friends right before plane load.',
    //     img: 'assets/jumpDay.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'Adventures around Mt. Albert near Twin Lakes, CO',
    //     img: 'assets/mtAlbert.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'A picture of Santana and I at the bottom of Mt. Evans (We made it all the way to the top!!)',
    //     img: 'assets/mtEvans.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'Adventures with friends along the North Shore in Minnesota',
    //     img: 'assets/northShore.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'Study abroad vacation in Paris, France',
    //     img: 'assets/paris.jpg',
    //     count: 0
    //     },
    //     {
    //     description: 'A picture of Santana and Cait on top of Lions Head mountain at Staunton State Park near Conifer, CO',
    //     img: 'assets/trip.jpg',
    //     count: 0
    //     }
    // ]
    self.comments = [];
self.getPictures = function () {
    $http.get('/gallery')
    .then(function(response) {
        console.log(response.data);
        self.imageList = response.data;
    })
}
self.getPictures();
// shows modal when picture is clicked
// hides modal when the x is clicked. 
// counts views
    self.togglePictures = function (pics) {
        if(pics.showModal == true) {
            pics.showModal = false;
            pics.count++; // need to make it start at one for page views
        } else {
            pics.showModal = true;
        }
    }
    // keeps track of likes
    self.love = function (pics) {
        pics.count++;
    }
    // allows user to make a comment
    self.makeComment = function (person, comment) {
        self.newComment = {
            person: person,
            comment: comment
        };
        self.comments.push(self.newComment);
    }
    self.showComment = function () {
        if(makeAComment == true) {
            makeAComment == false;
        } else {
            makeAComment = true;
        }
    }
}])
