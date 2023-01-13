let magicians = ["Ricky Jay", "Dyanmo", "David Blaine"];
let great_magicians = [];

function make_great(magicians) {
    let new_magicians = magicians.slice();
    for (var i = 0; i < new_magicians.length; i++) {
        new_magicians[i] = "The Great " + new_magicians[i];
    }
    return new_magicians;
}

function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

great_magicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(great_magicians);