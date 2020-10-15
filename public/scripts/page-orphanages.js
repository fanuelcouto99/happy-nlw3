// Código para criação do mapa - Usando biblioteca Leaflet
const map = L.map('mapid').setView([51.505, -0.09], 13);

// Adicionando o mapa na const criada
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);