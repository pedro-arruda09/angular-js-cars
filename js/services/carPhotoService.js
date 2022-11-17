myApp.service('carPhotoService', function ($http, config) {
    this.create = carRent => $http.post(`${config.baseUrl}/car-photos`, carRent);
    this.edit = carRent => $http.put(`${config.baseUrl}/car-photos`, carRent);
    this.get = () => $http.get(`${config.baseUrl}/car-photos`);
});