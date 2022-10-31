myApp.service('capitalService', function($http, config) {
    this.create = capital => $http.post(`${config.baseUrl}/capitals`, capital);
    this.edit = capital => $http.put(`${config.baseUrl}/capitals`, capital);
    this.get = () => $http.get(`${config.baseUrl}/capitals`);
    // this.show = capitalId => $http.get(`${config.baseUrl}/capitals/${capitalId}`)
});