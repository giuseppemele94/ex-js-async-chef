
/** BONUS 1 e 2 */

async function fetchJson(url) {
    const response = await fetch (url);
    const obj = await response.json();
    return obj; 
}



async function getChefBirthday(id) {

let ricetta ; 

try {
 ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`);
}
catch(error) {
    throw new Error("Nessuna ricetta trovata con id ${id");
}

if(ricetta.message) {
    throw new Error(ricetta.message); 
}


let chef ; 

try {
 chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`);
}
catch(error) {
    throw new Error("Nessuno chef trovato con id ${id");
}

if(chef.message) {
    throw new Error(chef.message); 
}

const formattedDate = dayjs(chef.birthDate).format("DD/MM/YYYY");
 return formattedDate; 

}


(async () => {
    try {
        const birthday = await getChefBirthday(10);
        console.log("Data di nascita dello chef :", birthday);
    }
    catch(error) {
        console.error("Errore",error.message);
    }
    finally{
        console.log("Fine"); 
    }
})(); 


