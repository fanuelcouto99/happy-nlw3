// Criando objeto para retirar opções do mapa
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Código para criação do mapa - Usando biblioteca Leaflet
const map = L.map('mapid', options).setView([-21.2034112,-41.8977974], 15);

// Adicionando o mapa na const criada
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Criando icone para ser add no map ao criar uma marcação
const icon =L.icon({
    iconUrl: "./public/assets/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// Adicionado marcação para inserir popups
L.marker([-21.2034112,-41.8977974], {icon}).addTo(map);