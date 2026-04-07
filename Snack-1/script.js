
/** EX- IL COMPLEANNO DELLO CHEF  */

async function fetchJson(url) {
    const response = await fetch (url);
    const obj = await response.json();
    return obj; 
}

async function getChefBirthday(id) {

const ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`);
const chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`);
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


