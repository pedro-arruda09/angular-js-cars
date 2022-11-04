myApp.controller("availableCarsCtrl", [
    '$scope', 
    'rentService', 
    '$location', 
    function ($scope, rentService, $location) {

        const availableCars = () => {
            return rentService.availableCars().then(resp => {
                $scope.availableCars = resp.data;
            }).catch(() => {
                $scope.error = "Unable to load data.";
            }); 
        }

        const setQueryCar = id => {
            const fim = $location.search().fim;
            const inicio = $location.search().inicio;
            const cidade = $location.search().cidade;
            $location
            .path('/carrinho')
            .search({
                'cidade': cidade,
                'inicio': inicio,
                'fim': fim,
                'carro_id': id
            })
        }
    
        $scope.setQueryCar = setQueryCar;
        availableCars();
}]);