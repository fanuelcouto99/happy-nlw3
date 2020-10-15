// Código para criação do mapa - Usando biblioteca Leaflet
const map = L.map('mapid').setView([-21.2034112,-41.8977974], 15);

// Adicionando o mapa na const criada
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Criando icone para ser add no map ao criar uma marcação
const icon =L.icon({
    iconUrl: "./public/assets/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// Criando popup para abrir ao clicar na marcação
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanages"> <img src="./public/assets/arrow-white.svg"> </a>');

// Adicionado marcação para inserir popups
L.marker([-21.2034112,-41.8977974], {icon}).addTo(map)
    .bindPopup(popup);