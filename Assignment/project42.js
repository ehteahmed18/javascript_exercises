let magicians = ["Ricky Jay", "Dynamo", "David Blaine"];

function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
    return magicians;
}

function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

magicians = make_great(magicians);
show_magicians(magicians);