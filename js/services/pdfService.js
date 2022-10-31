myApp.service('pdfService', function($http, config) {
    this.get = () => $http.get(`${config.baseUrl}/pdf`);
});