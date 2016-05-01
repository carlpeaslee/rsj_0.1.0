
myApp.controller('LibraryController', ["$scope", "$http", "$location", "RSJService", function($scope, $http, $location, RSJService){
    var rsjService = RSJService;


    var getUserData = function(){
        console.log("getUserData fired from library ctrler");
        $http.get("/auth/user/data").then(function(response){
            rsjService.user = {};
            rsjService.user.data = response.data;
            console.log("rsjService.user.data :", rsjService.user.data);
            $scope.currentpage = rsjService.user.data.currentpage;
        });
    };

    getUserData();
}]);
