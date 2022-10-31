const myApp = angular.module("carRental", ['ui.router', 'ui.bootstrap', 'ui.mask']);

myApp.config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $httpProvider.interceptors.push('BearerAuthInterceptor');


    $stateProvider.state("homepage", {
        url: "/",
        templateUrl: "view/home.html",
        controller: "userCtrl"
    }).state("register", {
        url: "/registro",
        templateUrl: "view/registro.html",
        controller: "userCtrl"
    }).state("userpage", {
        url: "/inicio/perfil",
        templateUrl: "view/userpage.html",
        controller: "userCtrl",
        onEnter: isAuthorized
    }).state("userRents", {
        url: "/meus-alugueis",
        templateUrl: "view/userRents.html",
        controller: "rentCtrl",
        onEnter: isAuthorized
    }).state("cars", {
        url: "/carros",
        templateUrl: "view/availableCars.html",
        controller: "carCtrl",
    }).state("toRentCars", {
        url: "/carros",
        templateUrl: "view/toRentCar.html",
        controller: "carCtrl",
    }).state("rent", {
        url: "/aluguel",
        templateUrl: "view/rent.html",
        controller: "carCtrl",
    }).state("pdf", {
        url: "/aluguel/pdf",
        templateUrl: "view/pdf.html",
        controller: "pdfCtrl",
        onEnter: isAuthorized
    }).state("login", {
        url: "/login",
        templateUrl: "view/login.html",
        controller: "authCtrl"
    }).state("profilepage", {
        url: "/meu-perfil",
        templateUrl: "view/profilePage.html",
        controller: "userCtrl",
        onEnter: isAuthorized
    }).state("edit-user", {
        url: "/editar-perfil",
        templateUrl: "view/editUser.html",
        controller: "editUserCtrl",
        onEnter: isAuthorized
    });
});

const isAuthorized = ($state, $rootScope) => {
    const isLogged = localStorage.getItem("token");
  
    if (!isLogged) {
      $state.go("login");
      return;
    }

    $rootScope.isLogged = true;
};