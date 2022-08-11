// (function () {
//   'use strict';
//   angular.module('LunchCheck', [])
//   .controller('LunchCheckController', ['$scope', function ($scope) {
//     $scope.name1="Hello";
//     $scope.clickbtn=function () {
//       var count=0;
//       var total_items=0;
//       var txt= $scope.name1;
//       var items=txt.split(",");
//       count=items.length;
//       total_items=items.length;
//       for (var i=0;i<count;i++)
//         {
//           if (items[i]==" ") {
//             total_items=total_items-1;
//           }
//         }
//       console.log(total_items);
//       if (total_items<=3) {
//         $scope.name1="Enjoy!";
//         }
//       else {
//         $scope.name1="Too Much!";
//         }
//     };
//   }]);
//   }) ();

angular.module("LunchCheck",[]).controller("LunchCheckController",["$scope",function(a){a.name1="Hello",a.clickbtn=function(){var e=0,b=0,c=a.name1.split(",");e=c.length,b=c.length;for(var d=0;d<e;d++)" "==c[d]&&(b-=1);console.log(b),b<=3?a.name1="Enjoy!":a.name1="Too Much!"}}])
