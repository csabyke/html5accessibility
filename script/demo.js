angular.module("demo", [])
    .config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: '/partials/welcome.html' })
        .when('/form/login', { templateUrl: '/partials/form/login.html' })
        .when('/form/register', { templateUrl: '/partials/form/register.html'})
        .when('/form/reportform', {templateUrl: '/partials//form/reportform.html'})
        .when('/table/einfach', {templateUrl: '/partials/table/einfach.html'})
        .when('/leistungsnachweis/lsg1', {templateUrl: '/partials/leistungsnachweis/lsg1.html'})
        .when('/leistungsnachweis/lsg2', {templateUrl: '/partials/leistungsnachweis/lsg2.html'})
        .when('/datenaustausch/lsg1', {templateUrl: '/partials/datenaustausch/lsg1.html'})
        .when('/datenaustausch/lsg2', {templateUrl: '/partials/datenaustausch/lsg2.html'})
        .otherwise({ redirectTo: "/" });
}])
    .directive("urlContainer", ["$route", function($route, undefined) {
    return {
        restrict: "A",
        link: function(scope, element, attr) {
            if(attr.urlContainer != "") {
                scope.$on("$routeChangeSuccess", function() {
                    var elementRoute = $route.routes[attr.urlContainer];
                    var currentRoute = $route.current.$route;

                    if (currentRoute && currentRoute == elementRoute) {
                        element.parents("li:first").addClass("active");
                    }
                    else {
                        element.parents("li:first").removeClass("active");
                    }
                });
            }
            else {
                scope.$watch(
                    function() {
                        return element.parents("li:first").find("li.active").size();
                    },
                    function(newValue) {
                        if (newValue > 0) {
                            element.parents("li:first").addClass("active");
                        } else {
                            element.parents("li:first").removeClass("active");
                        }
                    }
                );
            }

            element.attr("href", "#" + attr.urlContainer);
        }
    }
}])
    .controller("AccessibilityCtrl", ["$scope", function($scope) {
    $scope.test = "Scope . . . . . .  . . . . . .  . .  [OK.]";

    $scope.accessKey = true;
    $scope.autofocus = true;

    $scope.accessKey_a = function(_) {
        if ($scope.accessKey == true) {return "accesskey=\""+_+"\""} else {return "OFF"}
    }

    $scope.setAttribute = function(scopeVariable, name, attr) {
        if (scopeVariable == true) {
            return name + "=\"" + attr + "\"";
        }
    }


}])