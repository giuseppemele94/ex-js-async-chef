
/** EX- IL COMPLEANNO DELLO CHEF  */



async function getChefBirthday(id) {

const ricettaResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
const ricetta = await ricettaResponse.json(); 
const chefResponse = await fetch(`https://dummyjson.com/users/${ricetta.userId}`);
const  chef = await chefResponse.json(); 
return chef.birthDate; 

}


(async () => {
    try {
        const birthday = await getChefBirthday(1);
        console.log("Data di nascita dello chef :", birthday);
    }
    catch(error) {
        console.error("Errore",error.message);
    }
    finally{
        console.log("Fine"); 
    }
})(); 


