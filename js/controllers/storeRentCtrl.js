myApp.controller("storeRentCtrl", [
    '$scope',
    '$location',
    'userService',
    'capitalService',
    'AlertMessage',
    function ($scope, $location, userService, capitalService, AlertMessage) {
        $scope.form = {
            rent_started_at: null,
            rent_end_at: null,
            capital_id: null
        };

        const init = () => {
            userService.show().then(response => {
                $scope.user = response.data;
            }).catch((e) => console.log(e))
        }

        const listCapitals = () => {
            if (!$scope.capitalName) {
                return [];
            }

            return capitalService.suggest($scope.capitalName).then(resp => {
                return resp.data;
            }).catch(() => {
                return [];
            });
        };

        const setQueryString = () => {
            if ($scope.form.rent_end_at < $scope.form.rent_started_at) {
                AlertMessage.error('Data inválida!');
                return;
            }

            if (!$scope.form.capital_id) {
                AlertMessage.error('Selecione uma cidade');
                return;
            }

            $location
                .path('/escolher-carro')
                .search({
                    'cidade': $scope.capitalName,
                    'cidade_id': $scope.form.capital_id,
                    'inicio': moment($scope.form.rent_started_at).format('YYYY-MM-DD'),
                    'fim': moment($scope.form.rent_end_at).format('YYYY-MM-DD')
                })
        };

        const selectCapital = capital => {
            $scope.form.capital_id = capital.id;
        }

        $scope.setQueryString = setQueryString;
        $scope.listCapitals = listCapitals;
        $scope.selectCapital = selectCapital;
        init();
    }]);