angular.module('hhbApp').controller('deleteCategoryCtrl', function ($scope, $uibModalInstance, categories, category, entries, categoriesService, $http) {

  $scope.category = category;
  $scope.categories = categories.data;
  var entries = entries.data;


  // delete all entries in specific category then delete category
  $scope.deleteEntriesInCategory = function (category) {
    if (category.used != 0) {
      //delete all the entries in the category
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].category == category.title) {
          $http.delete('/api/entries/' + entries[i]._id)
            .success(function (data) {
              console.log(data);
              console.log(' All entries deleted from ' + category.title + ' succesfully');
            }).error(function (data) {
            console.log('Error: ' + data);
          });
        }
      }
    }

    //delete the category
    categoriesService.deleteCategory(category._id)
      .success(function (data) {

        var index = arrayObjectIndexOf($scope.categories, data);
        if (index > -1) {
          $scope.categories.splice(index, 1);
        }
        $uibModalInstance.close($scope.categories);
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  }

  function arrayObjectIndexOf(arr, obj){
    for(var i = 0; i < arr.length; i++){
      if(angular.equals(arr[i], obj)){
        return i;
      }
    };
    return -1;
  }

  //function to assign all entries of a cat to a different cat
  $scope.assignCat = function (oldCategory) {
    console.log('change category: new cat', $scope.newCat);
    var newCategory = $scope.newCat;


    for (var i = 0; i < entries.length; i++) {
      if (entries[i].category === oldCategory.title) {
        entries[i].category = newCategory;
        console.log('new category', newCategory);
        console.log('entry with new category', entries[i]);
        $http.put('/api/entries/' +  entries[i]._id, entries[i]) // TODO make entries service
          .success(function(data) {
            console.log('new category assign, edit entry PUT response', data);
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      };
        //$scope.calculateTotals();//TODO make service no make search api on categories
    }

    if ($scope.deleteOldCat){
      //delete old category
      categoriesService.deleteCategory(category._id)
        .success(function (data) {
          $scope.categories.pop(data);
          console.log(oldCategory.title + ' deleted succesfully');
        }).error(function (data) {
        console.log('Error: ' + data);
      });
    }

    //close the modal
    $uibModalInstance.close();
  };
  

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
