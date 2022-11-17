myApp.service('userService', function ($http, config) {
    this.create = user => $http.post(`${config.baseUrl}/users`, user);
    this.edit = user => $http.put(`${config.baseUrl}/users`, user);
    this.get = () => $http.get(`${config.baseUrl}/users`);
    this.show = () => $http.get(`${config.baseUrl}/users/profile`)
});