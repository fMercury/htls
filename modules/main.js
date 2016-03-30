var app = angular.module("siteApp",[]);

app.controller("centerController",["$scope","$http", function($scope, $http){

  var self=this;

  //Filter variables
  $scope.searchName="";
  $scope.searchZone="";
  $scope.searchRoomType="";

  $scope.zones = ["Centro","Aquarium","Stella Maris","Casino Central","Centro Cultural Villa Victoria", "La Perla  - Constitución", "Laguna de los Padres","Monumento Alfonsina Storni","Museo del Mar","Playa Bristol","Playa Varese","Plaza Mitre","Plaza San Martín","Puerto de Mar del Plata","Punta Mogotes","Reserva de Lobos Marinos","Torreón del Monje"];
  $scope.filteredClients=[];
  $scope.selectedStars=[];
  $scope.selectedHotels=[];
  $scope.selectedServices=[];

  //Form information
  $scope.username="";
  $scope.email="";
  $scope.phone="";
  $scope.dni="";
  $scope.people="";

  $scope.clients = [{
    "name" : "Cossack Spring Pea",
    "zone" : "Aquarium",
    "stars" : "2",
    "roomType": ["Individual","Doble","Familiar","Mútiple"],
    "services" : ["Wi-Fi","Desayuno"],
    "image" : "1.jpg"
  },{
      "name" : "Doghouse Brewing Co.",
      "zone" : "Centro",
      "stars" : "1",
      "roomType": ["Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno"],
      "image" : "2.jpg"
    },
    {
      "name" : "Fork And Knife",
      "zone" : "Laguna de los Padres",
      "stars" : "4",
      "roomType": ["Múltiple"],
      "services" : [],
      "image" : "3.jpg"
    },
    {
      "name" : "KW",
      "zone" : "Casino Central",
      "stars" : "2",
      "roomType": ["Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno","Spa"],
      "image" : "4.jpg"
    },
    {
      "name" : "Poids Plume",
      "zone" : "Centro",
      "stars" : "2",
      "roomType": ["Doble","Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno"],
      "image" : "5.jpg"
    },
    {
      "name" : "Westlands",
      "zone" : "Centro",
      "stars" : "3",
      "roomType": ["Individual","Doble","Familiar","Mútiple"],
      "services" : ["Wi-Fi","Desayuno"],
      "image" : "6.jpg"
    },
    {
      "name" : "Studio 45",
      "zone" : "Stella Maris",
      "stars" : "5",
      "roomType": ["Individual","Doble","Familiar","Mútiple"],
      "services" : ["Wi-Fi","Desayuno","Pileta"],
      "image" : "14.jpg"
    },
    {
      "name" : "Lingua Viva",
      "zone" : "Museo del Mar",
      "stars" : "2",
      "roomType": ["Doble","Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno","Playa"],
      "image" : "7.jpg"
    },
    {
      "name" : "Beach Park",
      "zone" : "Laguna de los Padres",
      "stars" : "2",
      "roomType": ["Múltiple"],
      "services" : ["Wi-Fi","Desayuno","Playa"],
      "image" : "8.jpg"
    },
    {
      "name" : "Corsa Capital",
      "zone" : "Playa Varese",
      "stars" : "3",
      "roomType": ["Doble","Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno","Pileta"],
      "image" : "9.jpg"
    },
    {
      "name" : "Taurus",
      "zone" : "Plaza Mitre",
      "stars" : "1",
      "roomType": ["Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno"],
      "image" : "15.jpg"
    },
    {
      "name" : "Tel",
      "zone" : "Plaza Mitre",
      "stars" : "3",
      "roomType": ["Individual","Doble","Familiar","Mútiple"],
      "services" : ["Wi-Fi","Pileta"],
      "image" : "10.jpg"
    },
    {
      "name" : "M",
      "zone" : "Playa Varese",
      "stars" : "4",
      "roomType": ["Doble","Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno","Spa","Pileta"],
      "image" : "11.jpg"
    },
    {
      "name" : "Hula Hoop",
      "zone" : "Torreón del Monje",
      "stars" : "5",
      "roomType": ["Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno","Spa"],
      "image" : "12.jpg"
    },
    {
      "name" : "Human",
      "zone" : "Torreón del Monje",
      "stars" : "3",
      "roomType": ["Doble","Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno"],
      "image" : "16.jpg"
    },
    {
      "name" : "Act Research",
      "zone" : "Centro Cultural Villa Victoria",
      "stars" : "4",
      "roomType": ["Doble","Familiar", "Múltiple"],
      "services" : ["Wi-Fi","Desayuno"],
      "image" : "13.jpg"
    },
  ];

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
  };

  this.addHotel = function(value){
    if ($scope.selectedHotels.includes(value)){
      $scope.selectedHotels.splice($scope.selectedHotels.indexOf(value), 1);
    }
    else{
      $scope.selectedHotels.push(value);
    }
  };

  this.removeHotel = function(value){
    if ($scope.selectedHotels.includes(value)){
      $scope.selectedHotels.splice($scope.selectedHotels.indexOf(value), 1);
    }
  };

  this.addService = function(value){
    if ($scope.selectedServices.includes(value)){
      $scope.selectedServices.splice($scope.selectedServices.indexOf(value), 1);
    }
    else{
      $scope.selectedServices.push(value);
    }
  };

  this.removeService = function(value){
    if ($scope.selectedServices.includes(value)){
      $scope.selectedServices.splice($scope.selectedServices.indexOf(value), 1);
    }
  };

  this.sendEmail = function(){
    console.log($scope.email);
      $http({
          method: 'GET',
          url: '/sendEmail',
          params: {'email' : $scope.email},
       }).success(function(data){
          alert("¡El mail ha sido enviado con éxito!");
          location.reload();
      }).error(function(){
          alert("Error en el envío.");
      });
    };

    $(document).ready(function(){
      $scope.availableTypes=self.getTypes();
      //Datepicker code
      $(function () {
            $('#arrival-day-pick').datetimepicker();
            $('#leaving-day-pick').datetimepicker();
      });
    });

    $scope.filterRoomType = function(hotel){
      if (hotel.roomType.includes($scope.searchRoomType) || $scope.searchRoomType==""){
        return true;
      }
      else return false;
    }

    $scope.filterServices = function(hotel){
      var allServices=true;
      var i=0;
      while (allServices && i<$scope.selectedServices.length){
        if (!hotel.services.length){
          allServices=false;
        }
        else{
          if (!hotel.services.includes($scope.selectedServices[i])){
            allServices=false;
          }
        }
        i++;
      }
      return allServices;
    }

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
