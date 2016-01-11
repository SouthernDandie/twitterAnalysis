if (Meteor.isClient) {

  Meteor.startup(function() {
    GoogleMaps.load();
  });



  Template.map.helpers({  
    mapOptions: function() {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(37.322078, -121.931466),//focus on 7 Stars, my favorite bar
          zoom: 8
        };
      }
    }
  });


  Template.body.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  });






  Template.map.onCreated(function() {  
    GoogleMaps.ready('map', function(map) {
      google.maps.event.addListener(map.instance, 'click', function(event) {
        //Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        console.log('lat: ' + event.latLng.lat());
        console.log('long: ' + event.latLng.lng());
      });

      // The code shown below goes here

    });
  });





}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
