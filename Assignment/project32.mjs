let current_users = ["Brian","Sean","John","Sam","Dominic"];
let new_users = ["Letty","Roman","JOHN","Dominic","Toretto"];
for (let i=0; i < current_users.length; i++){
    for (let j = 0; j < new_users.length; j++){
        let current = current_users[i].toUpperCase();
        let newuser = new_users[j].toUpperCase();
        if (current === newuser){
            console.log(`${new_users[j]} is not available. Select a new user name.`)
        }
        else{
            console.log(`${new_users[j]} is available.`)
        }
    }
}
