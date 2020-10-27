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

// criando let para receber valor que após pode ser modificada;
let marker;

// Criando função para marcar ponto no mapa
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // Inserindo valores no input escondidos para salvar lat e lng
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remover icone anterior para atualizar com novo caso o marker existir
    marker && map.removeLayer(marker);

    // adicionar icone na marcação criada
    marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Função para adiconar o campo de fotos
function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images');

    // Pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // Clonar o campo da ultima imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // Verificar se o campo está vazio para poder add ou não 
    const input = newFieldContainer.children[0];

    if (input.value == "") {
        return
    }

    //  Limpar o campo antes de add ao container de imagens
    newFieldContainer.children[0].value = "";

    //  Adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer);
}

//  Função para deletar o campo de add imagens
function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    // Se somente tiver um campo, não vai permitir remover
    if (fieldsContainer.length < 2) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }

    // Deletar o campo
    span.parentNode.remove();
}

// Trocar selecionar botões sim ou não
function toggleSelect(event) {
    // Retirar a class active dos botões
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove('active');
    })

    // Pegar o botão clicado
    const button = event.currentTarget;
    button.classList.add('active');
    
    // atualizado o input=hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

    // verificar o valor do botão para atualizar
    input.value = button.dataset.value;
}