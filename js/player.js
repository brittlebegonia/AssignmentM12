class Player {
    constructor() {
        this.albums = [];
    }

    addAlbum(album) {
        this.albums.push(album);
    }

    favoriteAlbum() {
        let max = -1;
        let fav = null;

        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }

        return fav;
    }

    returnAlbum(index) {
        return this.albums[index];
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }

    play() {
        this.played++;
    }

    display() {
        return `${this.artist} : ${this.title} (Played ${this.played} times)`;
    }
}

window.addEventListener("load", () => {

    const player = new Player();

    const albumData = [
        ['Operation Ivy', 'Energy'],
        ['Blink 182', 'Dude Ranch'],
        ['New Found Glory', 'Sticks and Stones']
    ];

    const dropdown = document.getElementById("albums");
    const playBtn = document.getElementById("play");
    const favBtn = document.getElementById("favorite");
    const output = document.getElementById("favoriteAlbum");

    // DROPDOWN
    for (let i = 0; i < albumData.length; i++) {

        const album = new Album(albumData[i][0], albumData[i][1]);
        player.addAlbum(album);

        dropdown.add(new Option(`${album.artist} - ${album.title}`, i));
    }

    // PLAY BUTTON
    playBtn.addEventListener("click", () => {
        const selectedIndex = dropdown.value;
        player.returnAlbum(selectedIndex).play();
    });

    // FAVORITE BUTTON
    favBtn.addEventListener("click", () => {
        const fav = player.favoriteAlbum();

        if (fav) {
            output.innerHTML = `Your favorite album is ${fav.display()}`;
        }
    });

});