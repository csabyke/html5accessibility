(function(undefined) {
    var hammerEventDirectives = {};
    var events = [
        'Hold',
        'Tap',
        'Doubletap',
        'Transformstart',
        'Transform',
        'Transformend',
        'Dragstart',
        'Drag',
        'Dragend',
        'Swipe',
        'Release'
    ];

    angular.forEach(events, function(name) {
        var directiveName = 'hammer' + name;
        hammerEventDirectives[directiveName] = ['$parse', function($parse) {
          return function(scope, element, attr) {
            var fn = $parse(attr[directiveName]);
            element.hammer().bind(angular.lowercase(name), function(event) {
              scope.$apply(function() {
                fn(scope, {$event:event});
              });
            });
          };
        }];
      }
    );

    angular.module('hammer', []).directive(hammerEventDirectives);
}
)();