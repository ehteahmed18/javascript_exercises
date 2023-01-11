let names = ['Hashash','Qasim','Hunaina'];
console.log(`${names[1]} can't make it for dinner`)
names[1] = "Muneeb";
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(`\nHey ${element}, I'm arranging a get together party. I will be glad if you join us!`);
}
console.log("\nGreat News! I have found a bigger table so there will be more people joining us.")
names.unshift("Osama")  //Adding at the beginning of array
names.splice(2,0,"Noman")  //Adding at the middle of array
names.push("Zaid") //Adding at the end of array
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(`\nHey ${element}, I'm arranging a get together party. I will be glad if you join us!`);
}
console.log("\nOnly two people are invited for dinner")
//Removing those people which are not invited for dinner
for (let i = 0; i < (names.length + 2); i++) {
    let name=names.pop();
    console.log(`\nHey ${name} I'm sorry I can't invite you to dinner`)
}
// Invitation for remaining two people
for (let i = 0; i < (names.length + 1); i++) {
    let id = names.pop();
    console.log(`\nHey ${id} You are still invited for dinner`);  
}
console.log(names);  //Empty Array