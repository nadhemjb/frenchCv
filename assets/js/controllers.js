
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
       templateUrl : "assets/templates/accueil.html"
    })
    .when("/parcours", {
        templateUrl : "assets/templates/parcours.htm",
    })
    .when("/competences", {
        templateUrl : "assets/templates/competences.htm", 
    })
    .when("/langues", {
        templateUrl : "assets/templates/langues.html",   
    })
    .otherwise({template:"Ce parcours n'existe pas"});
});
app.controller('ajoutDiplome', function($scope){
    
    $scope.dip='';
    $scope.ins='';
    $scope.dur='';
    $scope.ajouter=function(diplome,institut,duree){
        
        $scope.dip = diplome;
        $scope.ins = institut;
        $scope.dur = duree;

        
    };
    
});
// function etapesController($scope, $http) {
//     var url = "data1.txt";

//     $http.get(url).success(function(response) {
//       $scope.etapes = response;
//     });
//   }
// app.controller("etapesController", function($scope) {
// $scope.etapes = [
    
//     "Créer, modifier, supprimer et afficher les clients",
//     "Afficher la liste des comptes stockés dans la base de donnés",
//     "Consulter l'historique des opération du compte consulté",
    
// ]


// });
app.controller('bien', function($scope){
    $scope.bienvenue='Bienvenue sur mon CV!';
    
});
