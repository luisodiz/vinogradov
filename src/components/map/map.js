ymaps.ready(init);
function init(){
  const myMap = new ymaps.Map("map", {
    center: [57.755401, 40.990333],
    zoom: 16
  });

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map/mark.svg',
    iconImageSize: [60, 72],
    iconImageOffset: [-30, -72]
  })

  myMap.geoObjects.add(myPlacemark)
}
