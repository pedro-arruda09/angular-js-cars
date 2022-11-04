myApp.service('recoverPasswordService', function($http, config) {
    this.recovery = (data) => $http.post(`${config.baseUrl}/recover_password`, data);
    this.validateToken = (token) => $http.get(`${config.baseUrl}/validate-token-password/${token}`);
    this.changePassword = (data) => $http.put(`${config.baseUrl}/change-password/${data.token}`, data);
});