function make_Album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_Album("Alan Walker", "Faded"));
console.log(make_Album("K'Naan", "Wavin Flag", 9));
console.log(make_Album("Maroon 5", "Memories", 4));