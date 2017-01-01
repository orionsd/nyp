(function ($) {
    $(document).ready(function (e) {


        // Навигация главного меню
        var $navbarTab = $('.js-navbar-tab');
        $navbarTab.on('click', function () {
            var $this = $(this),
                $navbarNav = $('.js-navbar-nav');
            $navbarTab.removeClass('active');
            $this.addClass('active');
            $navbarNav.addClass('hidden');
            $(".js-navbar-nav[data-tab='"+$this.data('tab')+"']").removeClass('hidden');
        });

        // Навигация модального окна авторизации
        var $modalLogin = $('.js-modal-login'),
            $modalTab = $modalLogin.find('.js-modal-tab');
        $modalTab.on('click', function () {
            var $this = $(this),
                $form = $modalLogin.find('.js-form');
            $modalTab.removeClass('active');
            $this.addClass('active');
            $form.addClass('hidden');
            $modalLogin.find(".js-form[data-tab='"+$this.data('tab')+"']").removeClass('hidden');
        });
    });
})(jQuery);

$(function () {
    if ($('._js-tabs').length) {

        var placeMarkConfig = {
            iconImageHref: 'images/assets/pin1.png', // картинка иконки
            iconImageSize: [84, 84], // размер иконки
            balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
            groupByCoordinates: true
        };

        var placemarks = [];

        var initMap = function (ymaps) {

            var config = {
                berdsk: {
                    center: [54.769503, 83.101108],
                    zoom: 16,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">Северный мкр., 21</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 913 942 16 55',
                        coordinats: [54.769503, 83.101108]
                    }]
                },
                novokuz: {
                    center: [53.780363, 87.126036],
                    zoom: 15,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Доз, 10а ТЦ Планета</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 3843 910 706',
                        coordinats: [53.780363, 87.126036]
                    }]
                },
                novosib: {
                    center: [55.030199, 82.92043],
                    zoom: 11,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">пр. Карла Маркса, 24</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 285 04 85',
                        coordinats: [54.989714, 82.907979]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Богдана Хмельницкого, 20</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 285 04 95',
                        coordinats: [55.070278, 82.943974]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Фрунзе 238 ТРЦ Сибирский Молл</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 328 07 00',
                        coordinats: [55.03897, 82.960728]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Ватутина, 107 ТЦ Мега</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 230 51 15',
                        coordinats: [54.96423, 82.936465]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Курчатова, 1 ТЦ Голден Парк</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 362 90 00',
                        coordinats: [55.104311, 82.960692]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Богдана Хмельницкого, 4</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 209 24 95',
                        coordinats: [55.066045, 82.936554]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">Красный пр-кт, 101 ТЦ Ройял Парк</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 230 35 64',
                        coordinats: [55.055553, 82.911833]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Выборная 122/2</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 961 223 07 03',
                        coordinats: [54.999681, 83.010971]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Фрунзе 4</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 913 950 45 61',
                        coordinats: [55.036174, 82.917241]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">Красный пр., 25/1, к. 1</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 251 00 71',
                        coordinats: [55.028718, 82.919531]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Гоголя 13_ТЦ Галерея</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 363 70 39',
                        coordinats: [55.043721, 82.922334]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">пр.Карла Маркса 7 ТЦ Сан Сити</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 913 453 65 71',
                        coordinats: [54.985059, 82.897046]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Забалуева 49/1, ТЦ Заря</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 913 927 70 34',
                        coordinats: [54.986258, 82.810179]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Вокзальная Магистраль, 16</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 373 19 16',
                        coordinats: [55.060431, 82.913342]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Дуси Ковальчук, 179/2</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 230 10 14',
                        coordinats: [55.031329, 82.915013]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Кольцово пос., 18</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 383 285 44 90',
                        coordinats: [55.088187, 82.814033]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Краснообск пос., 244а</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 905 952 26 96',
                        coordinats: [55.087826, 82.812605]
                    }]
                },
                bisk: {
                    center: [52.543152, 85.215989],
                    zoom: 15,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул.Ильи Мухачева 200, ТЦ Воскресение</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 3854 555 530',
                        coordinats: [52.542978, 85.215445]
                    }]
                },
                tyumen: {
                    center: [57.123514, 65.562661],
                    zoom: 13,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Валерии Гнаровской, 12</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 3452 64 40 80',
                        coordinats: [57.123514, 65.562661]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Дмитрия Менделеева 1а</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 3452 44 18 42',
                        coordinats: [57.117309, 65.549482]
                    }]
                },
                barnaul: {
                    center: [53.348053, 83.779875],
                    zoom: 13,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Молодежная, 26</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 385 260 41 86',
                        coordinats: [53.348612, 83.774835]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Антона Петрова, 219Б ТЦ Огни</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 3852 28 28 29',
                        coordinats: [53.359093, 83.697679]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">Павловский тракт, 188 ТРЦ Арена</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 3852 56 70 11',
                        coordinats: [53.349521, 83.637671]
                    }]
                },
                surgut: {
                    center: [61.277392, 73.365569],
                    zoom: 15,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">Нефтеюганское ш., 1 ТЦ Аура</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 346 227 02 70',
                        coordinats: [61.2775, 73.365733]
                    }]
                },
                nvartovsk: {
                    center: [60.939742, 76.569601],
                    zoom: 14,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул.Чапаева, 24</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 3466 45 45 48',
                        coordinats: [60.941228, 76.595814]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул.Чапаева 27</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 3466 48 06 96',
                        coordinats: [60.939633, 76.597826]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Ленина, 15П МФК Югра</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 3466 49 12 20',
                        coordinats: [60.940168, 76.546356]
                    }]
                },
                sterzh: {
                    center: [60.734112, 77.6034],
                    zoom: 15,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Строителей, 402а</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 382593-20-51',
                        coordinats: [60.734112, 77.6034]
                    }]
                },
                moscow: {
                    center: [55.75396, 37.620393],
                    zoom: 10,
                    cityData: [{
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">Энтузиастов ш., 1Б, к. 9, Балашиха ТЦ Светофор</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '8 498 505 02 41',
                        coordinats: [55.79431, 37.926476]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">ул. Ходынский бульвар, д.4 ТЦ Авиапарк</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        // balloonContentFooter: '88 495 730 52 53',
                        coordinats: [55.790464, 37.530409]
                    }, {
                        // iconContent: '<div class="place-mark">New York Pizza</div>',
                        balloonContentBody: '<div class="baloon-title">NYP на Тарской</div><div class="baloon-address">Ореховый бул., д. 14, стр. 3  ТРЦ Домодедовский</div><div class="ballon-worktime">Круглосуточно</div><a href="#" class="ballon-tel">8 913 934 18 95</a><a href="#" class="ballon-rew">Отзывы</a>',
                        coordinats: [55.609675, 37.720106]
                    }]
                }
            };

            var mapInit = function mapInit(city) {

                var zoomControl = new ymaps.control.ZoomControl({
                    options: {
                        size: 'small'
                    }
                });

                if (!mapInit.initedMaps) {
                    mapInit.initedMaps = {};
                }

                if (mapInit.initedMaps[city]) {
                    return;
                }

                if (config[city] && config[city].cityData) {
                    var map = new ymaps.Map(city, { center: config[city].center, zoom: config[city].zoom });

                    config[city].cityData.forEach(function (cityData, i) {
                        var placeMark = new ymaps.Placemark(cityData.coordinats, cityData, placeMarkConfig);
                        map.geoObjects.add(placeMark);
                        placemarks[i] = placeMark;
                    });
                    map.controls.add(zoomControl);
                }

                mapInit.initedMaps[city] = true;
            };

            return mapInit;
        }(window.ymaps);

        (function (ymaps) {
            function initBerdskMap() {
                return initMap('berdsk');
            }

            ymaps.ready(initBerdskMap);
        })(window.ymaps);

        $('._js-tab-city').on('click', function (e) {
            var data = $(this).data('city');

            if ($(this).hasClass('_active')) {
                return false;
            } else {
                $('._js-tab-city').removeClass('_active');
                $(this).addClass('_active');
            }

            $(this).closest('._js-tabs').find('._js-tabs-map').removeClass('_active');
            $(this).closest('._js-tabs').find('._js-tabs-map[data-city="' + data + '"]').addClass('_active');

            initMap(data);

            e.preventDefault();
        });

        $('.tabs__select').on('change', function (e) {
            var data = $(this).val();

            if ($('._js-tab-city').hasClass('_active')) {
                return false;
            } else {
                $('._js-tab-city').removeClass('_active');
                $('._js-tab-city').addClass('_active');
            }

            $(this).closest('._js-tabs').find('._js-tabs-map').removeClass('_active');
            $(this).closest('._js-tabs').find('._js-tabs-map[data-city="' + data + '"]').addClass('_active');

            initMap(data);

            e.preventDefault();
        });

        $('._js-show').on('click', function () {
            placemarks[0].balloon.open();
        });
    }
});

