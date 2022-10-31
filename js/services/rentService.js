myApp.service('rentService', function($http, config) {
    this.create = rent => $http.post(`${config.baseUrl}/user_rent/car_rent/`, rent);
    this.return = (rent, rentId) => $http.put(`${config.baseUrl}/user_rent/car_return/${rentId}`, rent);
    this.get = () => $http.get(`${config.baseUrl}/user_rent`);
    this.availableCars = () => $http.get(`${config.baseUrl}/user_rent/available`);
    this.userRent = () => $http.get(`${config.baseUrl}/user_rent/profile`)
});