myApp.service('capitalService', function($http, config) {
    this.get = () => $http.get(`${config.baseUrl}/capitals`);
    this.suggest = filter => $http.get(`${config.baseUrl}/capitals/suggest?search=${filter}`)
});