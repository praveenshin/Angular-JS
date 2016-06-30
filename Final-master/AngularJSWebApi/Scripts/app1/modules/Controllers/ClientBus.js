/// <reference path="../../lib/angular/angular.min.js" />



//AngularJS module
var app = angular.module('BusApp', []);

//AngularJS controller
app.controller('BusController', function ($scope, APIService) {



    $scope.getAll = function () {
        var selectAll = APIService.getAll(); //The Method Call from service
        alert('1');
        selectAll.then(function (pl)
        {
            $scope.Buses = pl.data
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
        selectById.then(function (p1)
        {
            $scope.bus = p1.data;
           
        },
        function (err)
        {
            alert(err.statustext);
        }
        );
    }
   

   
    // Edit the record
    $scope.edit = function (ide, Bus)
    {
        var Update = APIService.put(ide, Bus);
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
            $scope.ide = "";
            $scope.id1 = "";
            $scope.id2 = "";
            $scope.Bus.bus_name = "";
            $scope.Bus.category_id = "";
            $scope.Bus.start_date = "";
            $scope.Bus.end_date = "";
            $scope.Bus.departure_time = "";
            $scope.Bus.route_id = "";
        }
   

        $scope.insert = function (Bus) {

            alert(Bus.bus_name + ' ' + Bus.category_id);
            var Insert = APIService.post(Bus);
            promisePost.then(function (response)
            {
                alert(response + 'Added Successfuly');
            },
            function (err)
            {
                alert(err);
            });
        }
    
});
app.service('APIService', function ($http) {



    //Request for Creating new record
    this.post = function (Bus)
    {
        alert(Bus.bus_name + 'in post ' + Bus.category_id);
        return $http.post("http://localhost:62541/api/ServerBus", Bus);
        
    }
    //Request for fetching Single Records
    this.get = function (id) {
        return $http.get("http://localhost:62541/api/ServerBus/" + id);
    }

    //Request for fetching All Details
    this.getAll = function () {
        return $http.get("http://localhost:62541/api/ServerBus");
    }


    //Request for Update Details
    this.put = function (id, Bus) {
        var request = $http({
            method: "put",
            url: "http://localhost:62541/api/ServerBus/" + id,
            data: Bus
        });
        return request;
    }
    //Request for Delete Details
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "http://localhost:62541/api/ServerBus/" + id
        });
        return request;
    }
});