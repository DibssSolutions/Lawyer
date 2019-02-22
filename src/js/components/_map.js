
if(document.querySelector('#map')) {
  ymaps.ready(function() {  
    var map = new ymaps.Map('map', {
      center: [55.76, 37.64], 
      zoom: 10
    });
    map.behaviors.disable('scrollZoom');
    map.controls.remove('smallMapDefaultSet');
    //   map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    //   map.controls.remove('routeEditor');
    map.controls.remove('rulerControl');
    map.container.fitToViewport();
    if (map) {
      ymaps.modules.require(['Placemark', 'Circle'], function(Placemark, Circle) {
        var placemark = new Placemark([55.76, 37.64],{
          balloonContentBody: 'В студеную зимнюю пору'
        });
        map.geoObjects.add(placemark);

        // Балун откроется в точке «привязки» балуна — т. е. над меткой.
        myPlacemark.balloon.open();
      });
    }
  });
}
