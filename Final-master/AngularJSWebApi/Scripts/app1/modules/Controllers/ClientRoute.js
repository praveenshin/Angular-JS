//AngularJS module
var app = angular.module('RouteApp', []);
/// <reference path="../../lib/angular/angular.min.js" />



//AngularJS controller
app.controller('RouteController', function ($scope, APIService) {



    $scope.getAll = function () {
        var selectAll = APIService.getAll(); //The Method Call from service
        alert('1');
        selectAll.then(function (pl)
        {
            $scope.Routes = pl.data
        },
              function (err)
              {
                  alert(err.statustext);
              });
    }


    $scope.get=function()
    {
        var id = $scope.id;
        alert(id);
        var selectById = APIService.get(id);
        selectById.then(function (p1) {
            $scope.route = p1.data;
           
        },
        function (error)
        {
            alert(error.statustext);
        }
        );
    }
   

   
    $scope.add = function (Route)
    {
       
        alert(Route.Source + ' ' + Route.Destination);
        var Update = APIService.post(Route);
        Update.then(function (response)
        {
            alert(response + 'Added Successfuly');
        },
        function (err)
        {
            alert(err.statustext);
        });
    }
    $scope.edit=function(ide,Route)
    {
        var Update = APIService.put(ide, Route);
        Update.then(function (pl)
        {
                alert('Updated Successfuly');
        },
            function (err)
            {
                alert(err.statustext);
            });
        }

        //Method to Delete
            $scope.remove = function ()
            {
                alert($scope.id2);
                var Delete = APIService.delete($scope.id2);
                Delete.then(function (response)
                {
                alert('Deleted Successfuly');
                },
                function (err)
                {
                    alert(err.statustext);
                });
        }

    //Clear the text fields
        $scope.clear = function () {
           
            $scope.id1 = "";
            $scope.id2 = "";
            $scope.Route.Source = "";
            $scope.Route.Destination = "";
            $scope.Route.Distance = "";
            
        }
   

    
});
app.service('APIService', function ($http) {



    //Request for Creating new record
    this.post = function (route)
    {
        alert(route.Source + 'in post ' + route.Destination);
        return $http.post("http://localhost:62541/api/ServerRoute", route);
        
    }
    //Request for fetching Single Records
    this.get = function (id) {
        return $http.get("http://localhost:62541/api/ServerRoute/" + id);
    }

    //Request for fetching All Details
    this.getAll = function () {
        return $http.get("http://localhost:62541/api/ServerRoute");
    }


    //Request for Update Details
    this.put = function (id, Route) {
        var request = $http({
            method: "put",
            url: "http://localhost:62541/api/ServerRoute/" + id,
            data:Route
        });
        return request;
    }
   //Request for Delete Details
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "http://localhost:62541/api/ServerRoute/" + id
        });
        return request;
    }
});