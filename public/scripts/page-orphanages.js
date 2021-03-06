// Código para criação do mapa - Usando biblioteca Leaflet
const map = L.map('mapid').setView([-21.2034112, -41.8977974], 15);

// Adicionando o mapa na const criada
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Criando icone para ser add no map ao criar uma marcação
const icon = L.icon({
    iconUrl: "/assets/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

function addMarker({ id, name, lat, lng }) {
    // Criando popup para abrir ao clicar na marcação
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/assets/arrow-white.svg"> </a>`);

    // Adicionado marcação para inserir popups
    L.marker([lat, lng], { icon }).addTo(map)
        .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach(((orphanageElement) => {
    const orphanage = {
        id: orphanageElement.dataset.id,
        name: orphanageElement.dataset.name,
        lat: orphanageElement.dataset.lat,
        lng: orphanageElement.dataset.lng
    }

    addMarker(orphanage);
})) 