const plato = [
  {
    id: 1,
    nombre: "La fortaleza",
    img: "./assets/img/brooke.jpg",
    precio: 2000,
    description: "calorias:150,carbohidratos:60,fibras:30,grasasSaturadas:0,",
    categoria: "break",
  },
  {
    id: 2,
    nombre: "Especial",
    img: "./assets/img/Especial.jpg",
    precio: 2300,
    description: " calorias:150,carbohidratos:30,fibras:40,grasasSaturadas:0,",
    categoria: "entrada",
  },
  {
    id: 3,
    nombre: "Rubi",
    img: "./assets/img/Rubi.jpg",
    precio: 2500,
    description: "calorias:110,carbohidratos:40,fibras:20,grasasSaturadas:0,",
    categoria: "plato principal",
  },
  {
    id: 4,
    nombre: "Hamburguesa",
    img: "./assets/img/Hamburguesa.jpg",
    precio: 2500,
    description: "calorias:130,carbohidratos:30,fibras:20,grasasSaturadas:0,",
    categoria: "entrada",
  },
  {
    id: 5,
    nombre: "Jugo de zanahoria",
    img: "./assets/img/jugo de zanahoria.jpg",
    precio: 1200,
    description: "calorias:130,carbohidratos:70,fibras:40,grasasSaturadas:0,",
    categoria: "jugo",
  },
  {
    id: 6,
    nombre: "Ensalada de palta queso tomate y cebolla",
    img: "./assets/img/varios.jpg",
    precio: 1800,
    description: "calorias:120,carbohidratos:30,fibras:20,grasasSaturadas:0,",
    categoria: "Plato principal",
  },
  {
    id: 7,
    nombre: "Pastel de brocoli con queso",
    img: "./assets/img/especialidad2.jpg",
    precio: 1700,
    description: "calorias:100,carbohidratos:40,fibras:10,grasasSaturadas:0,",
    categoria: "entrada",
  },
  {
    id: 8,
    nombre: "Pollo salteado con brocoli y soja",
    img: "./assets/img/especialidad3.jpg",
    precio: 1600,
    description: " calorias:80,carbohidratos:40,fibras:20,grasasSaturadas:0,",
    categoria: "plato principal",
  },
  {
    id: 9,
    nombre: "Salmon con arroz cebolla y pepino",
    img: "./assets/img/especialidad5.jpg",
    precio: 1700,
    description: "calorias:150,carbohidratos:50,fibras:15,grasasSaturadas:0,",
    categoria: "plato principal",
  },
  {
    id: 10,
    nombre: "Frutas",
    img: "./assets/img/especialidad6.jpg",
    precio: 1800,
    description: "calorias:50,carbohidratos:20,fibras:10,grasasSaturadas:0,",
    categoria: "postre",
  },
];
const carrito = [];
const contenedorPlatos = document.querySelector("#contenedorPlatos");
const contenedorCarrito=document.querySelector("#contenedorCarrito");
const mostrarPlatos = () => {
  plato.forEach((plato) => {
    const cardPlato = document.createElement("div");
    cardPlato.setAttribute("id", "cardPlato");
    cardPlato.innerHTML = `
        <img src="${plato.img}">
        <div class ="plato-description"></div>
        <h5>${plato.nombre}</h5>
        <h6>${plato.categoria}</h6>
        <p class="precio">${plato.precio}</p>
        <button id='${plato.id}' class="btn-compra">COMPRAR</button>
        </div>
        `;
    contenedorPlatos.appendChild(cardPlato);
  });
  const btnComprar = document.querySelectorAll(".btn-compra");
        btnComprar.forEach((el) => {
        el.addEventListener("click", (e) => {
        agregarAlCarrito(e.target.id);
    });
  });
};
mostrarPlatos();

function agregarAlCarrito(id) {
  console.log(id);
  console.log(carrito);

const total =carrito.reduce( (acc, el) => acc += el.precio,0)
console.log(total);

  const existe = carrito.some((plato) => plato.id === parseInt (id));
       console.log(existe);

  if (existe) {
    const indice = carrito.findIndex( p => p.id === parseInt(id));
    carrito[indice].cantidad++;
  } else {
    let platoEncontrado = plato.find(p => p.id ==parseInt(id));
        console.log(platoEncontrado);

    carrito.push(({ 
        id:platoEncontrado.id,
        nombre:platoEncontrado.nombre,
        precio:platoEncontrado.precio,
        cantidad: 1,
        categoria:platoEncontrado.categoria,
        img:platoEncontrado.img,
  }))
}
localStorage.setItem("carrito", JSON.stringify(carrito));
renderizarCarrito ()
}

function renderizarCarrito(){
  carrito.forEach( plato => {
    const cardPlato = document.createElement("div");
    cardPlato.setAttribute("id", "cardPlato");
    cardPlato.innerHTML = `
        <img src="${plato.img}">
        <div class ="plato-description"></div>
        <h5>${plato.nombre}</h5>
        <h6>${plato.categoria}</h6>
        <p class="precio">${plato.precio}</p>
        <button id='${plato.id}' class="btn-compra">ELIMINAR</button>
        </div>
        `;
    contenedorCarrito.appendChild(cardPlato);
  })
}
const inputs=document.querySelectorAll("input");
const compraTotal =("renderizarCarrito");
console.log(renderizarCarrito);

const btnBusc = document.querySelector("#busc")
      busc.addEventListener("click", () => {
      console.log("busc");
})
const inputUser = document.querySelector("#user"),
  inputPass = document.querySelector("#pass"),
  check = document.querySelector("#check"),
  formulario = document.querySelector("#form-login"),
  message = document.querySelector("#message");

function guardar(valor) {
  const user = { usuario: inputUser.value, pass: inputPass.value };
  if (valor === "sessionStorage") {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  if (valor === "localStorage") {
    localStorage.setItem("user", JSON.stringify(user));
  }
  return user;
}
function recuperarDatos(datos) {
  if (datos) {
    inputUser.value = datos.usuario;
    inputPass.value = datos.pass;
  }
}
recuperarDatos(JSON.parse(localStorage.getItem("user")));

const inputU= document.getElementsByTagName("input");
inputU[7].value= "Cristian"
console.log(inputU[7]);

const inputP= document.getElementsByTagName("input");
inputP[8].value= "7732"
console.log(inputU[8]);

const btnPedido=document.addEventListener(("click"), () =>{
   document.getElementById("btnPedido");
   console.log("Enviaste tu pedido");
 })
cardPlato=document.querySelector("#cardPlato");
cardPlato.addEventListener('mouseover',() =>{
  console.log("imagen se mueve")
})
const inputIngreso=inputs[0];

inputIngreso.addEventListener("keyup",() =>{

  console.log(inputIngreso.value);
})

btnBusc.addEventListener("click", () =>{

  cardPlato.innerHTML = `<h1>${inputIngreso.value}</h1>`
})
const menu1 = inputs[1];
const menu2 = inputs[2];

menu1.addEventListener("change", ()=>{

  console.log("cambiaste de espacio");
})
menu2.addEventListener("change", ()=>{

console.log("cambiaste de espacio");
})
const metodos =[
  "Efectivo",
  "Debito",
  "Tarjeta visa",
  "Tarjeta Santa Fe",
  "Otro"
];

const select = document.querySelector("select");

      metodos.forEach(metodo =>{

let option=document.createElement("option")

      option.value = metodo
      option.innerText = metodo

      select.appendChild(option)
})
select.addEventListener("change", ()=> {
let option= select.options[select.selectedIndex].value
console.log(option);
})
btnBusc.addEventListener("click", ()=>{
const menu= renderizarCarrito()

})