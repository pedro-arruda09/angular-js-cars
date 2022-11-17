myApp.service('rentService', function ($http, config) {
    this.create = rent => $http.post(`${config.baseUrl}/user_rent/car_rent/`, rent);
    this.return = (rentId, carId) => $http.post(`${config.baseUrl}/user_rent/car_return/${rentId}/${carId}`);
    this.get = () => $http.get(`${config.baseUrl}/user_rent`);
    this.availableCars = () => $http.get(`${config.baseUrl}/user_rent/available`);
    this.userRent = () => $http.get(`${config.baseUrl}/user_rent/profile`)
    this.totalPrice = (id) => $http.get(`${config.baseUrl}/user_rent/total/${id}`)
});