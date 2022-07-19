import { Component/* , ViewChild  */} from '@angular/core';
/* import { GoogleMapsModule } from '@angular/google-maps' */
import { GoogleMap } from '@capacitor/google-maps';


/* interface Window {
  initMap: () => void;
} */
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
/*   @ViewChild("map") mapElement;
  map: any; */
  constructor() {}

  ngOnInit() {
    this.initMap();
  }

  async initMap(){
    const apiKey = "AIzaSyCrIPQPyMcUMBuShU9uDUfRPniC77ePDnk";
    const mapElement = document.getElementById('map');
    let mapConfig = {
      center: {
        lat: -33.015735,
        lng: -71.549887,
      },
      zoom: 17,
      androidLiteMode: false,
    };

    let mapOptions = {
      id: "my-map",
      apiKey: apiKey,
      config: mapConfig,
      element: mapElement,
    }

    // Create the Map Element
    const map = await GoogleMap.create(mapOptions);
    // Drop a Map Marker

    await map.addMarker({coordinate: {lat: -33.015735, lng: -71.549887}});
    /* -33.015735, -71.549887*/
  }

  

  

  /* initMap(){

    let coords = new google.maps.LatLng(25,80);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })

  } */
}
