//Boton que cierra la información desplegada en el mapa
let botonCerrarInfo = document.getElementById("botonCerrarInfo");

var mymap = L.map('mapid').setView([4.7652, -74.0824], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWljaGFlbG9sbW9zdHJ1amlsbG8iLCJhIjoiY2tneWNyOXdhMGNqaTJ1bXNjZ2cxendoYiJ9.bCeZFg_DZa2f9kLkrj9bTw'
}).addTo(mymap);
// Adicionando marcadore
var marker = L.marker([4.7652, -74.0824]).addTo(mymap);
// var marker2 = L.marker([51.508, -0.11]).addTo(mymap);
//Adicionando un circulo
var circle = L.circle([4.7500, -74.0824], {
    color:'black', 
    fillColor:'#f03',
    fillOpacity:0.5,
    radius: 500
}).addTo(mymap);
// //Adicionando un polígono
var triangle = L.polygon([[4.7789, -74.1264],[4.7352, -74.1334],[4.7652, -74.0924]]).addTo(mymap);

//Adicionando texto a un marcador con un "popup"
marker.bindPopup("<b>¡Localidad de suba!</b>").openPopup();
circle.bindPopup("<h1>Título h1</h1>");
triangle.bindPopup("<h2> Título h2 </h2>");
// Eventos
var popup = L.popup();
function onMapCLick(e){
    // alert("Hizo click en " + e.latlng);
    popup
        .setLatLng(e.latlng)
        .setContent("Usted hizo click aquí: " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapCLick);

// Creación de un marker propio
var greenIcon = L.icon({
    iconUrl:'./images/leaf-green.png',
    shadowUrl:'./images/leaf-shadow.png',
    iconSize: [38,95],
    shadowSize:[50,64],
    iconAnchor:[22,94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // point of the shadow which will correspond to marker's location
    popupAnchor: [-3, -76]
})
//4.749056, -74.180024
var marker3 = L.marker([4.778308, -74.170238], {icon:greenIcon}).addTo(mymap);
marker3.bindPopup("<h4> Soy una hoja verde</h4>")

//Clase de icons
var LeafIcon = L.Icon.extend({
    options:{
        shadowUrl: './images/leaf-shadow.png',
        iconSize: [38,95],
        shadowSize: [50,64],
        iconAnchor: [22,94],
        shadowAnchor:[4,62],
        popupAnchor:[-3, -76]
    }
}) 
var iconoVerde = new LeafIcon({iconUrl:'./images/leaf-green.png'}),
    iconoRojo = new LeafIcon({iconUrl: './images/leaf-red.png'}),
    iconoNaranja = new LeafIcon({iconUrl: './images/leaf-orange.png'});

L.icon = function (opciones){
    return new L.Icon(opciones);
};

let markerVerde = L.marker([4.789598, -74.024136], {icon: iconoVerde}).addTo(mymap).bindPopup('Soy una hoja verde');
let markerRojo = L.marker([4.742897, -74.182085], {icon:iconoRojo}).addTo(mymap).bindPopup('<i>Soy una hoja roja</i>');
let markerNaranja = L.marker([4.803796, -74.113926], {icon:iconoNaranja}).addTo(mymap).bindPopup('<strong> Soy una hoja naranja </strong>');

function alertaNaranja(){
    // alert('Funciona el click')
    // console.log(infoMapa);
    swal("¡Milonga!", "¡Ven a bailar tango!");
}

function desplegarInfo(){
    let infoMapa = document.getElementById("infoMapa");
    infoMapa.style.top = "100px";
}

function cerrarInfo(){
    let infoMapa = document.getElementById("infoMapa");
    infoMapa.style.top = "-300px"
}
markerNaranja.on('click', alertaNaranja);
markerRojo.on('click', desplegarInfo);

botonCerrarInfo.addEventListener('click', cerrarInfo);