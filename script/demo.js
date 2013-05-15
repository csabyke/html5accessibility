angular.module("demo", [])
    .config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: '/partials/welcome.html' })
        .when('/mitarbeiter/lsg1', { templateUrl: '/partials/mitarbeiter/lsg1.html' })
        .when('/mitarbeiter/lsg2', { templateUrl: '/partials/mitarbeiter/lsg2.html'})
        .when('/ereignisprotokoll/lsg1', {templateUrl: '/partials/ereignisprotokoll/lsg1.html'})
        .when('/ereignisprotokoll/lsg2', {templateUrl: '/partials/ereignisprotokoll/lsg2.html'})
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
            if(attr.wwRoute != "") {
                scope.$on("$routeChangeSuccess", function() {
                    var elementRoute = $route.routes[attr.wwRoute];
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

            element.attr("href", "#" + attr.wwRoute);
        }
    }
}])
