jQuery.fn.hammer = function(options, undefined)
{
    return this.each(function()
    {
        var $el = jQuery(this);

        var hammer;
        if ($el.data("hammer") === undefined) {
            hammer = new Hammer(this, options);
            $el.data("hammer", hammer);
        }
        else {
            hammer = $el.data("hammer");
            if (options !== undefined) {
                jQuery.each(options, function (key, value) {
                    hammer.options(key, value);
                });
            }
        }

        var events = ['hold','tap','doubletap','transformstart','transform','transformend','dragstart','drag','dragend','swipe','release'];

        for(var e=0; e<events.length; e++) {
            hammer['on'+ events[e]] = (function(el, eventName) {
                return function(ev) {
                    el.trigger(jQuery.Event(eventName, ev));
                };
            })($el, events[e]);
        }
    });
};