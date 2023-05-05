/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/gif;base64,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"
        };
        /**/

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);
