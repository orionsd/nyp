(function ($) {
    $(document).ready(function () {
        $('.js-select-size').select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass: 'theme-nyp'
        });
        $('.js-select-quote').select2({
            minimumResultsForSearch: Infinity,
            dropdownCssClass: 'theme-nyp'
        });

        function smile() {
            var $smile = $('.js-smile'),
                $timer = setTimeout(function () {
                    $smile.addClass('collapsed');
                    setTimeout(function () {
                        $smile.removeClass('collapsed');
                    }, 3000)
                }, 3000);
            $smile.on({
                mouseenter: function () {
                    var $this = $(this);
                    $this.not('.active').addClass('collapsed');
                    clearTimeout($timer);
                },
                mouseleave: function () {
                    var $this = $(this);
                    $this.not('.active').removeClass('collapsed');
                },
                click: function () {
                    var $this = $(this);
                    $this.toggleClass('active');
                    $this.closest('.js-catalog-box').toggleClass('active');
                    $this.removeClass('collapsed');
                }
            });
        }

        smile();

        $('.js-product-slider').owlCarousel({
            items: 1
        });
        $('.js-product-slider').on('initialized.owl', function () {
            console.log('wow');
        });
        $('.js-add-slider').owlCarousel({
            dots: false,
            //itemsMobile: [[480,2]]
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                }
            }
        });
        var $catalogBoxPopover = $('.js-catalog-box-popover');
        var $productPopover = $('.js-product-popover');
        $productPopover.popover({
            content: function () {
                return $(this).closest('.js-product-description').text();
            }
        });
        $productPopover.on({
            'shown.bs.popover' : function () {
                $(this).addClass('active');
            },
            'hide.bs.popover' : function () {
                $(this).removeClass('active');
            }
        });
        $catalogBoxPopover.popover({
            content: function () {
                return $(this).closest('.js-catalog-box-subscription').text();
            }
        });
        $catalogBoxPopover.on({
            'shown.bs.popover' : function () {
                $(this).addClass('active');
            },
            'hide.bs.popover' : function () {
                $(this).removeClass('active');
            }
        });
    });
})(jQuery);