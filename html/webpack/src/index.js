import './sass/style.scss';

function addTiles() {
    var text = [
        {
            title: "AMET CONDIMENTUM",
            content: "Dolor"
        },
        {
            title: "LOREM CURSUS",
            content: "Ligula"
        },
        {
            title: "CONDIMENTUM ULTRICIES",
            content: "Consectetur"
        },
        {
            title: "RIDICULUS ORNARE",
            content: "Ullamcorper"
        }
    ];
    var tiles = document.getElementsByClassName('tiles')[0];
    for (var i = 0; i < 4; i++) {
        tiles.appendChild(tile(text[i]));
    }
}

function tile(text) {
    var tile = document.createElement("div");
    tile.classList.add("tile");

    tile.appendChild(element("title", text.title));
    tile.appendChild(element("content", text.content));

    return tile;
}

function element(type, text) {
    var element = document.createElement("div");

    element.classList.add("tile-" + type);
    element.innerHTML = text;

    return element;
}

addTiles();