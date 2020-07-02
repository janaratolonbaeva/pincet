window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	function paralax(event){
		let promo = document.querySelector('.promo');
		let itemParalax = promo.querySelectorAll('.promo-heart');

		itemParalax.forEach((layer, i) => {
			let speed = layer.getAttribute('data-speed');
			
			itemParalax[0].style.transform = `translate(${event.clientX*speed/3000}px, ${event.clientY*speed/2000}px)`;
			itemParalax[1].style.transform = `translate(${event.clientX*speed/-5000}px, ${event.clientY*speed/-1000}px)`;
			itemParalax[2].style.transform = `translate(${event.clientX*speed/6000}px, ${event.clientY*speed/4000}px)`;
			
		});

	}

	document.addEventListener('mousemove', paralax);


	// Yandex map

	ymaps.ready(init);

  function init(){
    let myMap = new ymaps.Map("map", {
      center: [52.0933335720148,23.69816800000001],
      zoom: 12
    });
    myMap.behaviors.disable([
      'drag',
      'scrollZoom'
      ]);
    let myPlacemark = new ymaps.Placemark([52.0933335720148,23.69816800000001],{
      balloonContentHeader: '"PINCET" - Студия депиляции и массажный кабинет в Бресте.',
      hintContent: '"PINCET" - Студия депиляции и массажный кабинет в Бресте.'
    }, {
      preset: 'islands#redIcon'
    });
    myMap.geoObjects.add(myPlacemark);
  }


	$('select').styler();

});