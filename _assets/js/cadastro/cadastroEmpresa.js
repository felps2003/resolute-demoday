/* --------------- Empresa --------------- */
const nomeEmpresa = document.querySelector('#nomeEmpresa');
const cnpj = document.querySelector('#cnpj');
const emailEmpresa = document.querySelector('#emailEmpresa');
const senhaEmpresa = document.querySelector('#senhaEmpresa');
const telefoneEmpresa = document.querySelector('#telEmpresa');
const categoriaEmpresa = [];
categoriaEmpresa[0] = document.querySelector('#categoria-empresa-startup');
categoriaEmpresa[1] = document.querySelector('#categoria-empresa-Fintech');
categoriaEmpresa[2] = document.querySelector('#categoria-empresa-Mei');
categoriaEmpresa[3] = document.querySelector('#categoria-empresa-Epp');
const btnEnviar = document.querySelector('#btn-continuar-etapa2');


class Empresa {
    constructor(nomeEmpresa, cnpj, emailEmpresa, senhaEmpresa, categoriaEmpresa, telefoneEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
        this.cnpj = cnpj;
        this.emailEmpresa = emailEmpresa;
        this.senhaEmpresa = senhaEmpresa;
        this.categoriaEmpresa = categoriaEmpresa;
        this.telefoneEmpresa = telefoneEmpresa;
    }
};



btnEnviar.addEventListener("click", () => {

    let categoria = recuperandoCategoria();

    let registroEmpresa = new Empresa(
        nomeEmpresa.value,
        cnpj.value,
        emailEmpresa.value,
        senhaEmpresa.value,
        categoria,
        telefoneEmpresa.value
    );

    console.log(registroEmpresa);
    fetch("http://localhost:8080/contacts", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(registroEmpresa)
    });
})


const recuperandoCategoria = () => {
    let categoriaEscolhida;

    categoriaEmpresa.forEach(categoria => {
        if(categoria.checked === true) {

            switch(categoria.value) {
                case "categoria-empresa-startup":
                    categoriaEscolhida = "Startup"
                    break;

                case "categoria-empresa-Fintech":
                    categoriaEscolhida = "Fintech"
                    break;

                case "categoria-empresa-Mei":
                    categoriaEscolhida = "Mei"
                    break;

                case "categoria-empresa-Epp":
                    categoriaEscolhida = "Epp"
                    break;

                default: 
                    undefined;
                    break;

            }
        }


    });

    return categoriaEscolhida
    
}


