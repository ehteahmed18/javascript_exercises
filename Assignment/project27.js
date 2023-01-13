//Version of program in which first if block of color green runs

let alien_color = "green";
if (alien_color === "green") {                   //True
    console.log("\nYou earned 5 points");
}
else if (alien_color === "yellow"){              //False
    console.log("\nYou just earned 10 points");
}
else if (alien_color === "red"){                 //False
    console.log("\nYou just earned 15 points");
}

//Version of program in which second if block of color yellow runs

alien_color = "yellow";
if (alien_color === "green") {                   //Fslde
    console.log("\nYou earned 5 points");
}
else if (alien_color === "yellow"){              //True
    console.log("\nYou just earned 10 points");
}
else if (alien_color === "red"){                 //False
    console.log("\nYou just earned 15 points");
}
//Version of program in which third if block of color red runs

alien_color = "red";
if (alien_color === "green") {                   //False
    console.log("\nYou earned 5 points");
}
else if (alien_color === "yellow"){              //False
    console.log("\nYou just earned 10 points");
}
else if (alien_color === "red"){                 //True
    console.log("\nYou just earned 15 points");
}


