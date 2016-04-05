myApp.controller('AuthController',["$scope", "$window", "AuthFactory", function ($scope, $window, AuthFactory) {
  var _this = this;
  var authFactory = AuthFactory;
  _this.loggedIn = authFactory.checkLoggedIn(); // NOTE: only updated on page load
}]);