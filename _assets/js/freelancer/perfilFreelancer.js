const urlSearchParams = new URLSearchParams(window.location.search);
const freelaId = urlSearchParams.get("id");

async function perfilFreelancer(id){
    try {
        let API = await fetch(`http://localhost:5000/perfil/${id}`);
        let response =  await API.json();
        let data = response;
        console.log(data);

    }catch {
        console.error(api)
    }
}

window.addEventListener("load", () => perfilFreelancer(freelaId));
