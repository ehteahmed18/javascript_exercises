function makeShirt(size = "Large", message = "I love JavaScript") {
    console.log(`The shirt is a size ${size} and the message printed on it is "${message}".`);
}
// Call
makeShirt();     //T-shirt with default size and default message
makeShirt("Medium");   //T-shirt with medium size and default message
makeShirt("Small", "Hello World");   //T-shirt with different size and different message