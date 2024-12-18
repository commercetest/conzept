(function($, undefined) {
    var count = 0;
    var splitter_id = null;
    var splitters = [];
    var current_splitter = null;

		var hoveringOverMinizeToggle = false;

    $.fn.split = function(options) {
        var data = this.data('splitter');
        if (data) {
            return data;
        }
        var panel_1;
        var panel_2;
        var settings = $.extend({
            limit: 100,
            orientation: 'horizontal',
            position: '50%',
            invisible: false,
            onDragStart: $.noop,
            onDragEnd: $.noop,
            onDrag: $.noop,
            percent: false
        }, options || {});
        this.settings = settings;
        var cls;
        var children = this.children();
        if (settings.orientation == 'vertical') {
            panel_1 = children.first().addClass('left_panel');
            panel_2 = panel_1.next().addClass('right_panel');
            cls = 'vsplitter';
        } else if (settings.orientation == 'horizontal') {
            panel_1 = children.first().addClass('top_panel');
            panel_2 = panel_1.next().addClass('bottom_panel');
            cls = 'hsplitter';
        }
        if (settings.invisible) {
            cls += ' splitter-invisible';
        }
        var width = this.width();
        var height = this.height();
        var id = count++;

        this.addClass('splitter_panel');

        var splitter = $('<div/>').addClass(cls).bind('mouseenter touchstart', function() {
            splitter_id = id;
        }).bind('mouseleave touchend', function() {
            splitter_id = null;
        })
        .insertAfter(panel_1).append(
          '<span id="splitter-toggle" title="resize pane"><i class="fas fa-grip-lines-vertical"></i></span>' 
          // + '<span id="minimizeLeftPanesToggle" onclick="console.log(&quot;minimize left panes&quot;)" title="toggle left panes"><i class="fas fa-angle-left"></i></span>'
        );


				/*
				$('.vsplitter').click(function(e) { 

					console.log('panel clicked'); 

					if ( hoveringOverMinizeToggle ){

						console.log('minize panel'); 

					}

				});
  

        // detect if hovering above minimizeLeftPanesToggle, and if so: check if click-released
        $('#minimizeLeftPanesToggle').hover(function(){

						hoveringOverMinizeToggle = true;
            console.log('hovering over minimize button');

            //$(this).css("background-color", "yellow");

          }, function(){

						hoveringOverMinizeToggle = false;

          //$(this).css("background-color", "pink");

        });
				*/

        var position;

        function toggleLeftPanes() {
          console.log('toggle left panes');
        }

        function get_position(position) {
            if (typeof position === 'number') {
                return position;
            } else if (typeof position === 'string') {
                var match = position.match(/^([0-9\.]+)(px|%)$/);
                if (match) {
                    if (match[2] == 'px') {
                        return +match[1];
                    } else {
                        if (settings.orientation == 'vertical') {
                            return (width * +match[1]) / 100;
                        } else if (settings.orientation == 'horizontal') {
                            return (height * +match[1]) / 100;
                        }
                    }
                } else {
                    //throw position + ' is invalid value';
                }
            } else {
                //throw 'position have invalid type';
            }
        }

        function set_limit(limit) {
            if(!isNaN(parseFloat(limit)) && isFinite(limit)){
                return {
                    leftUpper: limit,
                    rightBottom: limit
                };
            }
            return limit;
        }

        var self = $.extend(this, {

            refresh: function() {

                var new_width = this.width();
                var new_height = this.height();
                if (width != new_width || height != new_height) {
                    width = this.width();
                    height = this.height();
                    self.position(position);
                }
            },

            option: function(name, value) {
                if (name === 'position') {
                    return self.position(value);
                } else if (typeof value === 'undefined') {
                    return settings[name];
                } else {
                    settings[name] = value;
                }
                return self;
            },
            position: (function() {
                if (settings.orientation == 'vertical') {
                    return function(n, silent) {
                        if (n === undefined) {
                            return position;
                        } else {
                            position = get_position(n);
                            var sw = splitter.width();
                            var sw2 = sw/2, pw;
                            var width = self.width();
                            if (settings.invisible) {
                                pw = panel_1.width(position).outerWidth();
                                panel_2.width(width - pw);
                                splitter.css('left', pw - sw2);
                            } else {
                                if (settings.percent) {
                                    var w1 = (position - sw2) / width * 100;
                                    pw = panel_1.css('width', w1 + '%').outerWidth();
                                    panel_2.css('width', (width-pw-sw) / width * 100 + '%');
                                    splitter.css('left', (pw / width * 100) + '%');
                                } else {
                                    pw = panel_1.css('width', position - sw2).outerWidth();
                                    panel_2.width(width - pw - sw);
                                    splitter.css('left', pw);
                                }
                            }
                            panel_1.find('.splitter_panel').eq(0).height(self.height());
                            panel_2.find('.splitter_panel').eq(0).height(self.height());
                        }
                        if (!silent) {
                            self.trigger('splitter.resize');
                            self.find('.splitter_panel').trigger('splitter.resize');
                        }
                        return self;
                    };
                } else if (settings.orientation == 'horizontal') {
                    return function(n, silent) {
                        if (n === undefined) {
                            return position;
                        } else {
                            position = get_position(n);
                            var sw = splitter.height();
                            var sw2 = sw / 2, pw;
                            var height = self.height();
                            if (settings.invisible) {
                                pw = panel_1.height(position).outerHeight();
                                panel_2.height(height - pw);
                                splitter.css('top', pw - sw2);
                            } else if (settings.percent) {
                                var h1 = (position - sw2) / height * 100;
                                pw = panel_1.css('height', h1 + '%').outerHeight();
                                panel_2.css('height', ((height - pw - sw) / height * 100) + '%');
                                splitter.css('top', (pw / height * 100) + '%');
                            } else {
                                pw = panel_1.height(position - sw2).outerHeight();
                                panel_2.height(height - pw - sw);
                                splitter.css('top', pw);
                            }
                        }
                        if (!silent) {
                            self.trigger('splitter.resize');
                            self.find('.splitter_panel').trigger('splitter.resize');
                        }
                        return self;
                    };
                } else {
                    return $.noop;
                }
            })(),
            orientation: settings.orientation,
            limit: set_limit(settings.limit),
            isActive: function() {
                return splitter_id === id;
            },
            destroy: function() {
                self.removeClass('splitter_panel');
                splitter.unbind('mouseenter');
                splitter.unbind('mouseleave');
                splitter.unbind('touchstart');
                splitter.unbind('touchmove');
                splitter.unbind('touchend');
                splitter.unbind('touchleave');
                splitter.unbind('touchcancel');
                if (settings.orientation == 'vertical') {
                    panel_1.removeClass('left_panel');
                    panel_2.removeClass('right_panel');
                } else if (settings.orientation == 'horizontal') {
                    panel_1.removeClass('top_panel');
                    panel_2.removeClass('bottom_panel');
                }
                self.unbind('splitter.resize');
                self.trigger('splitter.resize');
                self.find('.splitter_panel').trigger('splitter.resize');
                splitters[id] = null;
                count--;
                splitter.remove();
                self.removeData('splitter');
                var not_null = false;
                for (var i=splitters.length; i--;) {
                    if (splitters[i] !== null) {
                        not_null = true;
                        break;
                    }
                }
                //remove document events when no splitters
                if (!not_null) {
                    $(document.documentElement).unbind('.splitter');
                    $(window).unbind('resize.splitter');
                    splitters = [];
                    count = 0;
                }
            }
        });
        self.bind('splitter.resize', function(e) {
            var pos = self.position();
            if (self.orientation == 'vertical' &&
                pos > self.width()) {
                pos = self.width() - self.limit.rightBottom-1;
            } else if (self.orientation == 'horizontal' &&
                       pos > self.height()) {
                pos = self.height() - self.limit.rightBottom-1;
            }
            if (pos < self.limit.leftUpper) {
                pos = self.limit.leftUpper + 1;
            }
            e.stopPropagation();
            self.position(pos, true);
        });
        //inital position of splitter
        var pos;
        if (settings.orientation == 'vertical') {
            if (pos > width-settings.limit.rightBottom) {
                pos = width-settings.limit.rightBottom;
            } else {
                pos = get_position(settings.position);
            }
        } else if (settings.orientation == 'horizontal') {
            //position = height/2;
            if (pos > height-settings.limit.rightBottom) {
                pos = height-settings.limit.rightBottom;
            } else {
                pos = get_position(settings.position);
            }
        }
        if (pos < settings.limit.leftUpper) {
            pos = settings.limit.leftUpper;
        }
        self.position(pos, true);
        var parent = this.closest('.splitter_panel');
        if (parent.length) {
            this.height(parent.height());
        }
        // bind events to document if no splitters
        if (splitters.filter(Boolean).length === 0) {
            $(window).bind('resize.splitter', function() {
                $.each(splitters, function(i, splitter) {
                    if (splitter) {
                        splitter.refresh();
                    }
                });
            });

            $(document.documentElement).on('mousedown.splitter touchstart.splitter', function(e) {

                if (splitter_id !== null) {
                    e.preventDefault();
                    current_splitter = splitters[splitter_id];
                    setTimeout(function() {
                        $('<div class="splitterMask"></div>').
                            css('cursor', current_splitter.children().eq(1).css('cursor')).
                            insertAfter(current_splitter);
                    });
                    current_splitter.settings.onDragStart(e);
                }
            }).bind('mouseup.splitter touchend.splitter touchleave.splitter touchcancel.splitter', function(e) {
                if (current_splitter) {
                    setTimeout(function() {
                        $('.splitterMask').remove();
                    });
                    current_splitter.settings.onDragEnd(e);
                    current_splitter = null;
                }
            }).bind('mousemove.splitter touchmove.splitter', function(e) {
                if (current_splitter !== null) {
                    var leftUpperLimit = current_splitter.limit.leftUpper;
                    var rightBottomLimit = current_splitter.limit.rightBottom;
                    var offset = current_splitter.offset();
                    if (current_splitter.orientation == 'vertical') {
                        var pageX = e.pageX;
                        if(e.originalEvent && e.originalEvent.changedTouches){
                          pageX = e.originalEvent.changedTouches[0].pageX;
                        }
                        var x = pageX - offset.left;
                        if (x <= current_splitter.limit.leftUpper) {
                            x = current_splitter.limit.leftUpper + 1;
                        } else if (x >= current_splitter.width() - rightBottomLimit) {
                            x = current_splitter.width() - rightBottomLimit - 1;
                        }
                        if (x > current_splitter.limit.leftUpper &&
                            x < current_splitter.width()-rightBottomLimit) {
                            current_splitter.position(x, true);
                            current_splitter.trigger('splitter.resize');
                            current_splitter.find('.splitter_panel').
                                trigger('splitter.resize');
                            //e.preventDefault();
                        }
                    } else if (current_splitter.orientation == 'horizontal') {
                        var pageY = e.pageY;
                        if(e.originalEvent && e.originalEvent.changedTouches){
                          pageY = e.originalEvent.changedTouches[0].pageY;
                        }
                        var y = pageY-offset.top;
                        if (y <= current_splitter.limit.leftUpper) {
                            y = current_splitter.limit.leftUpper + 1;
                        } else if (y >= current_splitter.height() - rightBottomLimit) {
                            y = current_splitter.height() - rightBottomLimit - 1;
                        }
                        if (y > current_splitter.limit.leftUpper &&
                            y < current_splitter.height()-rightBottomLimit) {
                            current_splitter.position(y, true);
                            current_splitter.trigger('splitter.resize');
                            current_splitter.find('.splitter_panel').
                                trigger('splitter.resize');
                            //e.preventDefault();
                        }
                    }
                    current_splitter.settings.onDrag(e);
                }
            });//*/
        }
        splitters[id] = self;
        self.data('splitter', self);
        return self;
    };
})(jQuery);
