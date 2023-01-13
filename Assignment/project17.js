let names = ['Hashash','Qasim','Hunaina'];
console.log(`${names[1]} can't make it for dinner`)
names[1] = "Muneeb";

console.log(`Hey ${names[0]}, I'm arranging a get together party. I will be glad if you join us!`);
console.log(`Hey ${names[1]}, I'm arranging a get together party. I will be glad if you join us!`);
console.log(`Hey ${names[2]}, I'm arranging a get together party. I will be glad if you join us!`);


console.log("\nGreat News! I have found a bigger table so there will be more people joining us.")
names.unshift("Osama")  //Adding at the beginning of array
names.splice(2,0,"Noman")  //Adding at the middle of array
names.push("Zaid") //Adding at the end of array

console.log(`\nHey ${names[0]}, I'm arranging a get together party. I will be glad if you join us!`);
console.log(`\nHey ${names[1]}, I'm arranging a get together party. I will be glad if you join us!`);
console.log(`\nHey ${names[3]}, I'm arranging a get together party. I will be glad if you join us!`);
console.log(`\nHey ${names[4]}, I'm arranging a get together party. I will be glad if you join us!`);
console.log(`\nHey ${names[5]}, I'm arranging a get together party. I will be glad if you join us!`);


console.log("\nOnly two people are invited for dinner")
//Removing those people which are not invited for dinner

let name1=names.pop();
console.log(`\nHey ${name1} I'm sorry I can't invite you to dinner`);
let name2=names.pop();
console.log(`\nHey ${name2} I'm sorry I can't invite you to dinner`);
let name3=names.pop();
console.log(`\nHey ${name3} I'm sorry I can't invite you to dinner`);
let name4=names.pop();
console.log(`\nHey ${name4} I'm sorry I can't invite you to dinner`);


// Invitation for remaining two people

let id1 = names.pop();
console.log(`\nHey ${id1} You are still invited for dinner`);
let id2 = names.pop();
console.log(`\nHey ${id2} You are still invited for dinner\n`);


console.log(names);  //Empty Array