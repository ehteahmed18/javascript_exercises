let names = ['Hashash','Qasim','Hunaina'];
console.log(`${names[1]} can't make it for dinner`)
names[1] = "Muneeb";
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(`\nHey ${element}, I'm arranging a get together party. I will be glad if you join us!`);
}
