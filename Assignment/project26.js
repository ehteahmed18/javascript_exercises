//Version of program in which if block runs

let alien_color = "green";
if (alien_color === "green") {                   //if statement is true
    console.log("You just earned 5 points for shooting the alien");
}
else{
    console.log("You just earned 10 points");
}

//Version of program in which else block runs

alien_color = "red";
if (alien_color === "green") {                     //if statement is false
    console.log("You just earned 5 points for shooting the alien");
}
else{                                               //else block runs
    console.log("You just earned 10 points");
}