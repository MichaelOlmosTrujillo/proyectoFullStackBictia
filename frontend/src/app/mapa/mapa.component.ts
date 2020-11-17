import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

declare let L;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
    
  constructor() {
    
   }

  ngOnInit(): void {
    let botonCerrarInfo = document.getElementById("botonCerrarInfo");
    var mymap = L.map('mapid').setView([4.7652, -74.0824], 10);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWljaGFlbG9sbW9zdHJ1amlsbG8iLCJhIjoiY2tneWNyOXdhMGNqaTJ1bXNjZ2cxendoYiJ9.bCeZFg_DZa2f9kLkrj9bTw'
}).addTo(mymap);
var mapaIcono = L.icon({
    iconUrl:'../../assets/images/logo/logo mapa-03.png',
    // shadowUrl:'./images/mapa/leaf-shadow.png',
    iconSize: [50,55],
    shadowSize:[50,64],
    iconAnchor:[22,94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // point of the shadow which will correspond to marker's location
    popupAnchor: [-3, -76]
})
var mapaIcono1 = L.marker([4.778308, -74.170238], {icon:mapaIcono}).addTo(mymap);
var mapaIcon = L.Icon.extend({
    options:{
        // shadowUrl: './images/mapa/leaf-shadow.png',
        iconSize: [60,90],
        shadowSize: [50,64],
        iconAnchor: [22,94],
        shadowAnchor:[4,62],
        popupAnchor:[-3, -76]
    }
})
L.icon = function (opciones){
    return new L.Icon(opciones);
};

 let iconoMapa2 = L.marker([4.789598, -74.024136], {icon: mapaIcono}).addTo(mymap);
 let iconoMapa3 = L.marker([4.942897, -74.182085], {icon:mapaIcono}).addTo(mymap);
 let iconoMapa4 = L.marker([4.673796, -74.113926], {icon:mapaIcono}).addTo(mymap);
function eventoSwal1(){
    // alert('Funciona el click')
    // console.log(infoMapa);
    Swal.fire("¡Milonga!", "¡Ven a bailar tango!");
}

function eventoSwal2(){
    // alert('Funciona el click')
    // console.log(infoMapa);
    Swal.fire("Teatro!", "¡Ven a teatro!");
}

function desplegarInfo(){
    let infoMapa = document.getElementById("infoMapa");
    infoMapa.style.top = "100px";
}

function cerrarInfo(){
    let infoMapa = document.getElementById("infoMapa");
    infoMapa.style.top = "-300px"
}
 mapaIcono1.on('click',eventoSwal1);
 iconoMapa2.on('click', eventoSwal2);






}

}
