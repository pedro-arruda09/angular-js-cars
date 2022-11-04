myApp.service('carService', function($http, config) {
    this.get = () => $http.get(`${config.baseUrl}/cars`);
    this.showFull = id => $http.get(`${config.baseUrl}/cars/show-full/${id}`)
    this.getPhotos = () => $http.get(`${config.baseUrl}/cars/find-photo`);
    
    // this.edit = car => $http.put(`${config.baseUrl}/cars`, car);
    // this.create = car => $http.post(`${config.baseUrl}/cars`, car);
    // this.createPhoto = carRent => $http.post(`${config.baseUrl}/cars-photos`, carRent);
    // this.editPhoto = carRent => $http.put(`${config.baseUrl}/car-photos`, carRent);
    // this.getPhoto = () => $http.get(`${config.baseUrl}/car-photos`);
});