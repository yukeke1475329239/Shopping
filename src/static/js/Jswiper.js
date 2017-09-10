/**
 * 
 * @param {string/dom} selector 
 * @param {object} options
 *  @options {function} afterslide
 *  @options {number/boolean} autoplay
 * 
 */ 
var JSwiper = function (selector, options) {
            this.el = typeof selector == 'string' ? document.querySelector(selector) : selector;
            this.wrapper = this.el.children[0];
            this.index = 0;
            this.count = this.wrapper.querySelectorAll('.swiper-slide').length;
            this.init(options);
        };
        JSwiper.prototype = {
            init: function (options) {
                this.roadway = this.el.offsetWidth;
                this.afterSlide = options.afterSlide || function () { };
                this.autoplay = options.autoplay || false;

                if (this.autoplay) {
                    this.autoPlay()
                }
                this.bindEvent();
            },
            bindEvent: function () {
                var index = this.index;
                var count = this.count;
                var el = this.el;
                var wrapper = this.el.children[0];
                var roadway = this.roadway;
                var startx, movex, spanx, endx = 0;

                el.addEventListener('touchstart', function (e) {
                    if (this.timer) clearInterval(this.timer);

                    spanx = 0;
                    wrapper.classList.remove('tst');
                    index = this.index
                    endx = -index * this.roadway;
                    startx = e.touches[0].pageX;
                }.bind(this));
                el.addEventListener('touchmove', function (e) {
                    movex = e.touches[0].pageX;

                    spanx = movex - startx;

                    if (index == 0 && spanx > 0 || index == count - 1 && spanx < 0) return;

                    wrapper.style.transform = 'translate3d(' + (endx + spanx) + 'px,0,0)'

                });
                el.addEventListener('touchend', function () {
                    wrapper.classList.add('tst');

                    if (Math.abs(spanx) > roadway / 3) {

                        if (spanx > 0) {
                            //去往上一帧
                            console.log('去往上一帧')
                            index--;
                            if (index <= 0) index = 0
                        }
                        if (spanx < 0) {
                            //去下一帧
                            console.log('去往下一帧')
                            index++;
                            if (index >= count - 1) index = count - 1
                        }
                    }
                    this.index = index;
                    this.moveTo(index);
                }.bind(this))
            },
            moveTo: function (index) {
                this.wrapper.style.transform = 'translate3d(' + (-index * this.roadway) + 'px,0,0)'
                this.afterSlide(index);
            },
            autoPlay: function () {
                var index = this.index;
                var time = typeof this.autoplay == 'number' ? this.autoplay : 3000;
                var that = this;
                this.wrapper.classList.add('tst');
                this.timer = setInterval(function () {
                    index++;

                    if (index >= that.count) {
                        index = 0
                    }
                    that.index = index;
                    that.moveTo(index);
                }, time)
            }
        };
export default JSwiper;