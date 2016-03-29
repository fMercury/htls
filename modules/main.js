var app = angular.module("siteApp",[]);

app.controller("centerController",["$scope", function($scope){

  this.getTypes = function(){
    var types=[];
    for (i in $scope.clients){
      if (!types.includes($scope.clients[i].type)){
        types.push($scope.clients[i].type);
      }
    }
    return types;
  };

  this.selectStars = function(value){
    if ($scope.selectedStars.includes(value)){
      $scope.selectedStars.splice($scope.selectedStars.indexOf(value), 1);
    }
    else{
      $scope.selectedStars.push(value);
    }
    console.log($scope.selectedStars);
  };

  $scope.searchText="";
  $scope.searchType="";
  $scope.zones = ["Centro","Aquarium","Stella Maris","Casino Central","Centro Cultural Villa Victoria", "La Perla  - Constitución", "Laguna de los Padres","Monumento Alfonsina Storni","Museo del Mar","Playa Bristol","Playa Varese","Plaza Mitre","Plaza San Martín","Puerto de Mar del Plata","Punta Mogotes","Reserva de Lobos Marinos","Torreón del Monje"];
  $scope.filteredClients=[];
  $scope.selectedStars=[];

  $scope.clients = [{
    "name" : "Cossack Spring Pea",
    "zone" : "Aquarium",
    "stars" : "2",
    "image" : "1.jpg"
  },{
      "name" : "Doghouse Brewing Co.",
      "zone" : "Centro",
      "stars" : "1",
      "image" : "2.jpg"
    },
    {
      "name" : "Fork And Knife",
      "zone" : "Laguna de los Padres",
      "stars" : "4",
      "image" : "3.jpg"
    },
    {
      "name" : "KW",
      "zone" : "Casino Central",
      "stars" : "2",
      "image" : "4.jpg"
    },
    {
      "name" : "Poids Plume",
      "zone" : "Centro",
      "stars" : "2",
      "image" : "5.jpg"
    },
    {
      "name" : "Westlands",
      "zone" : "Centro",
      "stars" : "3",
      "image" : "6.jpg"
    },
    {
      "name" : "Studio 45",
      "zone" : "Stella Maris",
      "stars" : "5",
      "image" : "14.jpg"
    },
    {
      "name" : "Lingua Viva",
      "zone" : "Museo del Mar",
      "stars" : "2",
      "image" : "7.jpg"
    },
    {
      "name" : "Beach Park",
      "zone" : "Laguna de los Padres",
      "stars" : "2",
      "image" : "8.jpg"
    },
    {
      "name" : "Corsa Capital",
      "zone" : "Playa Varese",
      "stars" : "3",
      "image" : "9.jpg"
    },
    {
      "name" : "Taurus",
      "zone" : "Plaza Mitre",
      "stars" : "1",
      "image" : "15.jpg"
    },
    {
      "name" : "Tel",
      "zone" : "Plaza Mitre",
      "stars" : "3",
      "image" : "10.jpg"
    },
    {
      "name" : "M",
      "zone" : "Playa Varese",
      "stars" : "4",
      "image" : "11.jpg"
    },
    {
      "name" : "Hula Hoop",
      "zone" : "Torreón del Monje",
      "stars" : "5",
      "image" : "12.jpg"
    },
    {
      "name" : "Human",
      "zone" : "Torreón del Monje",
      "stars" : "3",
      "image" : "16.jpg"
    },
    {
      "name" : "Act Research",
      "zone" : "Centro Cultural Villa Victoria",
      "stars" : "4",
      "image" : "13.jpg"
    },
  ];

  $scope.availableTypes=this.getTypes();

}]);

app.filter('inArray', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                if (!arrayFilter.length){
                  return true;
                }
                else{
                  return arrayFilter.indexOf(listItem[element]) != -1;
                }
            });
        }
    };
});
