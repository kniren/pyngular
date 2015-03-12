var appModule = angular.module('app', ['ngRoute']);

appModule.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
                {
                    title: 'Home',
                    controller: 'controller',
                    templateUrl: 'templates/archive.html'
                }
             )
        .when('/:url',
                {
                    controller: 'pageCtrl',
                    templateUrl: 'templates/page.html'
                }
             )
        .otherwise({ redirectTo: '/' });
}]);

appModule.factory('PagesFactory', function($http) {
    return $http.get('./pages.json').then(function(res) {
        if (res.data.error) {
           return null; 
        }
        else {
            return res.data;
        }
    });

});

appModule.controller('controller', function($scope, PagesFactory) {
    PagesFactory.then(function(response) {
        $scope.pages = response;
    });
});

appModule.controller('pageCtrl', function($scope, $routeParams, PagesFactory, $filter) {
    $scope.url = './pages/' + $routeParams.url + '.html';
    PagesFactory.then(function(response) {
        $scope.pages = response;
        var found = $filter('filter')($scope.pages, {url:$routeParams.url}, true);
        if (found.length) {
            var title = found[0].title;
            $scope.page.setTitle(title);
            $scope.meta = found[0];
        }
        else {
            console.log('Not Found');
        }
    });
});

appModule.run(function($rootScope) {
    $rootScope.page = {
        setTitle: function(title) {
            this.title = title;
        }
    }
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
        $rootScope.page.setTitle(current.$$route.title || 'Home');
    });
});
