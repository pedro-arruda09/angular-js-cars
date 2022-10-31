myApp.service('authService', function($http, config) {
    this.login = (email, password) => $http.post(`${config.baseUrl}/auth/login`, { email: email, password: password });

    this.logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }
});