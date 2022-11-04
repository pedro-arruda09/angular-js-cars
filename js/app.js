const myApp = angular.module("carRental", ['ui.router', 'ui.bootstrap', 'ui.mask']);

myApp.config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $httpProvider.interceptors.push('BearerAuthInterceptor');


    $stateProvider.state("homepage", {
        url: "/",
        templateUrl: "view/home.html",
        controller: "userCtrl"
    }).state("rent", {
        url: "/aluguel",
        templateUrl: "view/rent.html",
        controller: "storeRentCtrl",
    }).state("cars", {
        url: "/carros",
        templateUrl: "view/availableCars.html",
        controller: "availableCarsCtrl",
    }).state("login", {
        url: "/login",
        templateUrl: "view/login.html",
        controller: "authCtrl"
    }).state("recoverPassword", {
        url: "/recuperar-senha",
        templateUrl: "view/recoverPassword.html",
        controller: "recoverPasswordCtrl"
    }).state("changePassword", {
        url: "/trocar-senha",
        templateUrl: "view/changePassword.html",
        controller: "changePasswordCtrl"
    }).state("register", {
        url: "/registro",
        templateUrl: "view/registro.html",
        controller: "registerCtrl"
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
    }).state("toRentCars", {
        url: "/escolher-carro",
        templateUrl: "view/toRentCar.html",
        controller: "availableCarsCtrl",
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
    }).state("rentCart", {
        url: "/carrinho",
        templateUrl: "view/rentCart.html",
        controller: "rentCartCtrl",
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