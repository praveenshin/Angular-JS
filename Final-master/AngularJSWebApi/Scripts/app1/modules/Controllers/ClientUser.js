/// <reference path="../../lib/angular/angular.min.js" />




//AngularJS module
var app = angular.module('UserApp', []);

//AngularJS controller
app.controller('UserController', function ($scope, APIService) {



    $scope.getAll = function () {
        var GetAll = APIService.getAll(); //The Method Call from service
        alert('1');
        GetAll.then(function (pl)
        {
            $scope.Users = pl.data
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
        var Get = APIService.get(id);
        Get.then(function (p1)
        {
            $scope.user = p1.data;
           
        },
        function (err) {
            alert(err.statustext);
        }
        );
    }
   

   
    $scope.add = function (User)
    {
       
        alert(User.Name);
        var Post = APIService.post(User);
        Post.then(function (response)
        {
            alert(response + 'Added Successfuly');
        }, function (err)
        {
            alert(err);
        });
    }
    // Edit the record
    $scope.edit = function (ide, User)
    {
        var Put = APIService.put(ide, User);
        Put.then(function (pl)
        {
                alert('Updated Successfuly');
                getAll();
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
            Delete.then(function (response) {
                alert('Deleted Successfuly');
            }, function (err) {
                alert(err.statustext);
            });
        }

    //Clear the text fields
        $scope.clear = function () {

            $scope.id1 = "";
            $scope.id2 = "";
            $scope.User.Name = "";
            $scope.User.date_of_birth = "";
            $scope.User.email_id = "";
            $scope.User.mobile_no = "";
            $scope.User.Password = "";
            $scope.User.Address = "";
        }
   

    
});
app.service('APIService', function ($http) {



    //Request for Creating new record
    this.post = function (user)
    {
        alert(user.Name + 'in post '+user.Phone+' '+user.Dob);
        return $http.post("http://localhost:62541/api/ServerUser",user);
        
    }
    //Request for fetching Single Records
    this.get = function (id) {
        return $http.get("http://localhost:62541/api/ServerUser/" + id);
    }


    //Request for fetching All Details
    this.getAll = function () {
        return $http.get("http://localhost:62541/api/ServerUser");
    }


    //Request for Update Details
    this.put = function (id, user) {
        var request = $http({
            method: "put",
            url: "http://localhost:62541/api/ServerUser/" + id,
            data: user
        });
        return request;
    }
    //Request for Delete Details
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "http://localhost:62541/api/ServerUser/" + id
        });
        return request;
    }
});