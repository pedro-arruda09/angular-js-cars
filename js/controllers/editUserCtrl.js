myApp.controller("editUserCtrl", function ($scope, userService, $location) {
    // const init = () => {
    //     editUser();
    // }


    // const formatCpf = () => {
    //     cpfCnpj.link($scope.user.cpf);

    // }
 
    const editUser = () => {
        return userService.edit($scope.user).then(resp => {
                console.log(resp.data);
                $scope.editUserForm.$setPristine();
            }).then(() => {
                Swal.fire({
                    title: 'Tem certeza?',
                    text: "Seu perfil será atualizado",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sim, atualizar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        $location.path('/inicio/perfil');
                    }
                  })
            }).catch(() => {
                $scope.error = "Unable to load data.";
            }); 
    };


    $scope.editUser = editUser;
    // $scope.formatCpf = formatCpf;
});