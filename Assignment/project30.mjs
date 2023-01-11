let user_name = ["Brian", "Admin","John","Sam","Colin"]
for (let i = 0; i < user_name.length; i++) {
    if (user_name[i] === "Admin"){                      //will print a seperate message for admin if true
        console.log(`\nHello ${user_name[i]}, would you like to see a status report.`);
    }
    else{
        console.log(`\nHello ${user_name[i]}, thankyou for logging in again.`);
    }
}