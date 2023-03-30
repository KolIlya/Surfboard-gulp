let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.749929, 37.616310],
        zoom: 15,
        controls: []
    });

    let coords = [
        [55.75027, 37.603737]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/marker.svg',
        iconImageSize: [58, 73],
        iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    // for (let i = 0; i < coords.length; i++) {
    //     myCollection.add(new ymaps.Placemark(coords[i]));
    // };

    
    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable("scrollZoom");
};

ymaps.ready(init);