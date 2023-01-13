function make_sandwich(...items) {
    console.log("Sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
}

// Function calls:
make_sandwich("egg", "bacon", "mayo");
make_sandwich("lettuce", "tomato", "avocado");
make_sandwich("ham", "cheese", "mustard");