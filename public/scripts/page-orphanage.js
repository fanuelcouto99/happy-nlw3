// Criando objeto para retirar opções do mapa
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Pegando coordenadas do banco para exibir o mapa
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// Código para criação do mapa - Usando biblioteca Leaflet
const map = L.map('mapid', options).setView([lat, lng], 15);

// Adicionando o mapa na const criada
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Criando icone para ser add no map ao criar uma marcação
const icon = L.icon({
    iconUrl: "/assets/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// Adicionado marcação para inserir popups
L.marker([lat, lng], { icon }).addTo(map);

// Função para alterar a imagem principal da galeria
function selectImage(event) {
    const button = event.currentTarget;

    //Pesquisando todos os botoes da galeria
    const buttons = document.querySelectorAll(".images button");

    //Removendo a class .active dos botões
    buttons.forEach(removeActiveClass);

    //Função para remover as classes
    function removeActiveClass(button) {
        button.classList.remove("active");
    }

    //Selecionando a imagem clicada
    const image = button.children[0];

    //Selecionando container para trocar a imagem
    const imageContainer = document.querySelector(".orphanage-details > img");

    //Atualizando container da imagem
    imageContainer.src = image.src;

    //Adicionando class .active novamente ao botão clicado
    button.classList.add("active");
}