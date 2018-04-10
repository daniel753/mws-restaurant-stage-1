self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v10').then(function(cache) {
      return cache.addAll([
        '/js/',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/data/restaurants.json',
        '/css/styles.css',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/index.html',
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAFyCFCBpgF-a3ejAERxsaQeS6WiUoPShc&libraries=places&callback=initMap'
          
         /**
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAFyCFCBpgF-a3ejAERxsaQeS6WiUoPShc&libraries=places&callback=initMap'
        */
        
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
    
    /*
     if (event.request.url.startsWith('https://maps.googleapis.com/maps/api')) {
        event.respondWith(
            fetch ( event.request.url, { mode: 'no-cors'})
           // console.log('no-cors mode enabled');
        )};
    */
   
    event.respondWith(
    caches.match(event.request).then(function(response) {
        if (response) return response;
        console.log(response);
        return fetch(event.request.url, { mode: 'no-cors'});
    })
    );
});
