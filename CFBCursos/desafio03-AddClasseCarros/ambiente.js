class Carro {
    constructor (pnome, pportas, pblindagem, pmunicao, ptipo){
        this.nome=pnome
        this.portas=pportas
        this.blindagem=pblindagem
        this.municao=pmunicao
        this.tipo=ptipo
    }
    pegarNome(){
        return this.nome
    }
    pegarPortas(){
        return this.portas
    }
    pegarBlindagem(){
        return this.blindagem
    }
    pegarMunicao(){
        return this.municao
    }
    pegarTipo(){
        return this.tipo
    }
}


let carros = []
const carrosAdicionados = document.querySelector("#carrosAdicionados")
const btn_add = document.querySelector("#btn_add")
const inome = document.querySelector("#inome")
const iportas = document.querySelector("#iportas")
const iblindagem = document.querySelector("#iblindagem")
const imunicao = document.querySelector("#imunicao")
const itipo = document.querySelector('input[name="tipo"]:checked')


//ADICIONAR CARRO
btn_add.addEventListener("click", (evt)=>{
    const itipo = document.querySelector('input[name="tipo"]:checked')
    console.log(itipo.value)
    const carro = new Carro(inome.value, iportas.value, iblindagem.value, imunicao.value, itipo.value)
    carros.push(carro)
    console.log(carros)
    
    
    //VALIDAÇÕES PARA TER INPUTS
    if (!inome.value || !iportas.value) {
        alert("Por favor, preencha o nome e o número de portas!");
        carros.pop()
        return;
    }
    if (itipo.value === "Militar" && (!iblindagem.value || !imunicao.value)) {
        alert("Para carros militares, preencha a blindagem e a munição!");
        carros.pop()
        return;
    }
    
    
    //ADICIONA A DIV COM OS VALORES
    carrosAdicionados.innerHTML=""
    carros.map((carro, index)=>{
        let carroAdicionar = document.createElement("div")
        carroAdicionar.setAttribute("class", "campos")
        carroAdicionar.innerHTML=(`
            Nome: ${carro.pegarNome()} <br>
            Portas: ${carro.pegarPortas()} <br>
            Blindagem: ${carro.pegarBlindagem()} <br>
            Munição: ${carro.pegarMunicao()} <br>
            Tipo: ${carro.pegarTipo()} <br>
            `)


            //ADICIONAR BOTÃO DE REMOVER
            let botaoRemover = document.createElement("button")
            botaoRemover.innerHTML="Remover"
            botaoRemover.setAttribute("data-index", index); // Armazena o índice do carro
            carroAdicionar.appendChild(botaoRemover)
            botaoRemover.addEventListener("click", (evt)=>{
                const index = evt.target.getAttribute("data-index"); // Obtém o índice do carro
                carros.splice(index, 1); // Remove o carro do array
                carroAdicionar.remove(); // Remove a div do DOM
            })


            carrosAdicionados.appendChild(carroAdicionar)
    })
    
    
    // PERMITE DAR ENTER PARA INPUTAR ---- está com alguns bugs qnd usa Enter.
    const inputs = document.querySelectorAll(".campos input");
    inputs.forEach(input => {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter"){
                event.preventDefault() // Impede o comportamento padrão (como submeter um formulário)
                btn_add.click()
            }
        })
    })
    
    
    //REESTRUTURAR OS INPUTS
    inome.value = ""
    iportas.value = ""
    iblindagem.value = ""
    imunicao.value = ""
    inome.focus()
})


//DESABILITAR MUNIÇÃO E BLINDAGEM DE CARRO DE PASSEIO
document.querySelectorAll('input[name="tipo"]').forEach(input => {
    input.addEventListener("change", ()=>{ // Adiciona o evento de change aos inputs radio
        const itipo = document.querySelector('input[name="tipo"]:checked');
        if (itipo.value === "Militar") {
            iblindagem.disabled = false; // Habilita blindagem
            imunicao.disabled = false; // Habilita munição
        } else {
            iblindagem.disabled = true; // Desabilita blindagem
            imunicao.disabled = true; // Desabilita munição
            iblindagem.value = ""; // Limpa o valor do campo
            imunicao.value = ""; // Limpa o valor do campo
        }
    })
})