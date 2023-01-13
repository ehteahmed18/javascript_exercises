function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let i = 0; i < options.length; i += 2) {
        car[options[i]] = options[i + 1];
    }
    return car;
}

let car1 = create_car("Suzuki", "Swift", "color", "black", "year", 2022);
console.log(car1);

let car2 = create_car("Toyota", "Supra", "color", "black", "optional feature", "sunroof");
console.log(car2);

let car3 = create_car("Tesla", "Model S", "year", 2020, "range", "370 miles");
console.log(car3);