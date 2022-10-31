myApp.controller("pdfCtrl", function ($scope, pdfService, $q) {
    // const init = () => {
    //     $q.all([listUsers()])
    // }

    const listPDF = () => {
        return pdfService.get().then(resp => {
                $scope.pdf = resp.data;
            }).catch(() => {
                $scope.error = "Unable to load data.";
            }); 
    };

    $scope.listPDF = listPDF;
});