$(function () {
    'use strict';

    function Dispatcher(createConfig) {
        this.config = createConfig(this) || {};
        this.components = {};
    }

    Dispatcher.prototype.notify = function (notifyName, data) {
        if (notifyName in this.config) {
            this.config[notifyName](data);
        }
    };

    Dispatcher.prototype.broadcast = function (componentName, action, data) {
        const componentInstance = this.components[componentName];

        if (!componentInstance) {
            console.warn('There is no component ' + componentName); // eslint-disable-line no-console
            return;
        }

        if (!componentInstance.interface || !componentInstance.interface[action]) {
            console.warn('There is no action ' + action + ' in component ' + componentName); // eslint-disable-line no-console
            return;
        }


        componentInstance.interface[action].call(componentInstance, data);
    };

    Dispatcher.prototype.setComponents = function (components) {
        this.components = components;
    };

    Dispatcher.prototype.addComponent = function (component) {
        this.components = Object.assign(
            this.components,
            component
        );
    };

    window.Dispatcher = Dispatcher;
});


$(function () {
    $('._js-change-address').on('click', function (e) {
        $(this).closest('._js-lk').find('._js-adding-form').addClass('_opened');
        e.preventDefault();
    });
    $('.favaddress__list-add').on('click', function (e) {
        $(this).closest('._js-lk').find('._js-adding-form').addClass('_opened');
        e.preventDefault();
    });
});











$(function () {
    if ($('#YMapsID').length) {
        YMaps.jQuery(function () {
            // Создает экземпляр карты и привязывает его к созданному контейнеру
            let map = new YMaps.Map(YMaps.jQuery('#YMapsID')[0]);
            // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
            map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 10);
        });
    }
});

$(function () {
    $('._js-remember-address').on('click', function () {
        $(this).closest('._js-order-controls').addClass('_order_controls_hidden');
        $(this).closest('._js-order').find('._js-new-address').addClass('_order_form_name_visible');
    });

    $('._js-order-close').on('click', function () {
        $(this).closest('._js-new-address').removeClass('_order_form_name_visible');
        $(this).closest('._js-order').find('._js-order-controls').removeClass('_order_controls_hidden');
    });

    $('._js-show-address').on('click', function () {
        $(this).closest('._js-order-controls').addClass('_order_controls_hidden');
        $(this).closest('._js-order').find('._js-old-address').addClass('_order_form_address_visible');
    });

    $('._js-order-address-close').on('click', function () {
        $(this).closest('._js-old-address').removeClass('_order_form_address_visible');
        $(this).closest('._js-order').find('._js-order-controls').removeClass('_order_controls_hidden');
    });

    $('._js-order-tab').on('click', function () {
        var formId = $(this).data('id');

        $('._js-order').find('._js-order-form').addClass('_order_form_hidden');
        $('._js-order').find('._js-order-form[data-id = "' + formId + '"]').removeClass('_order_form_hidden');
    });
});