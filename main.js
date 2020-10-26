function gamintiKate() {
    var image = document.createElement('img');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif';
    var div = document.getElementById('flexbox');
    div.appendChild(image);
}