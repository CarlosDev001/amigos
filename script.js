import { tenis } from "./sapatos.js"; // importa o array de sapatos
let bodyModal = document.querySelector('.dinamic')
let modelo
let sapatos = document.querySelector('.sapatos .box1')
let viewSapatos


document.body.addEventListener('click',(e)=>{
  let globalEvents = e.target // capitura o click na tela

  /*verifica se foi clicado no classe close-modal se sim destroi o modal com
  innerHTML=""
  */
 if(globalEvents.classList.contains('close-modal')){
  bodyModal.innerHTML=""
 }

 /* aqui verifica se clicou no botao de contato se sim redireciona pra o whatsapp */

 if(globalEvents.classList.contains('contact')){
  window.open(`https://api.whatsapp.com/send/?phone=55********&text=Olá Darlan, queria fazer um pedido de um ${modelo}`)
 }
  
 //55818463600

 // aqui pega o id dos produtos  
let numberKey =  +e.target.dataset.key
let productos = tenis.filter(x=>x.id == numberKey)
//--------------------------------------------------

 //gera o modal dinamicamente 

let viweModal = productos.map(item=>{

  console.log(productos)
  bodyModal.innerHTML =`
  
  <div id="fade" class=""></div>
  <div id="modal" class="modal">
      <div class="modal-header">
          <h2>${item.modelo}</h2>
      </div>
      <div class="modal-body">
      <img src="${item.imagem}" />
          <p>${item.descricao}</p>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui animi tempore voluptatem perferendis saepe labore, ab explicabo iusto repellat dicta. Adipisci veritatis laborum amet nesciunt nostrum harum facere
              fuga.
          </p>
      </div>
      <button  class="contact">Fazer Pedido</button>
      <button id="close-modal" class="close-modal">Fechar</button>
  </div>
 `
 modelo = item.modelo // pega o modelo no memento que clica no botao abrir
})
})

// aqui gera a lista dos  tenis dinamicamente 

viewSapatos= tenis.map(item=>{
  sapatos.innerHTML += `
  <div id="q1">
  <h2 id="res1">${item.modelo}</h2>
  <div  style="background-image: url(${item.imagem})  ;"  id="perso1Img" class="foto-1"></div>
  <button data-key="${item.id}" class="open-modal">Abrir</button>
  </div>
  `
})
