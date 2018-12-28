import { Component, OnInit } from '@angular/core';
import {  } from 'google-maps';

@Component({
  selector: 'app-geography',
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.css']
})
export class GeographyComponent implements OnInit {
  mapOptions = { 
    center:new google.maps.LatLng(51.509865, -0.118092), 
    zoom: 9, 
    mapTypeId:google.maps.MapTypeId.ROADMAP 
    }
  constructor() { }

  
  ngOnInit() {

  }

}
