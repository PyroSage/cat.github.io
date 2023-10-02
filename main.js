function showRandomImage() {
    let image = document.getElementById("randomImage");
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)
}

window.onload = function() {
    this.showRandomImage();
}