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
        <p class="precio">$${plato.precio}</p>
        <img src="./assets/img/carrito.png" class="carrito" alt="">
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
function buscarPlato(array,filtro){
const encontrado = array.find ((el) => {
      return el.nombre.includes(filtro);
  });
    return encontrado
}
function agregarAlCarrito(id) {
    console.log(id);
    console.log(carrito);

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
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito ()
}
const total =carrito.reduce((acc, el) =>acc + (el.precio * el.cantidad) , 0);
    console.log(total);

const mostrarTotal = document.getElementById("total")
      mostrarTotal.innerText = total
localStorage.setItem("mostrarTotal", JSON.stringify(mostrarTotal));
} 
const btnCrear=document.querySelector(".btn-crear");
      btnCrear.addEventListener("click", () =>{
      console.log("Enviaste tu pedido")
      });
function renderizarCarrito(){
    carrito.forEach( plato => {
const cardPlato = document.createElement("div");
    cardPlato.setAttribute("id","cardPlato");
    cardPlato.innerHTML = `
        <img src="${plato.img}" class="pl-img">
        <div class ="plato-descrip"></div>
        <h5 class ="pl-nombre">${plato.nombre}</h5>
        <h6 class="pl-categoria">${plato.categoria}</h6>
        <p class="pl-precio">$${plato.precio}</p>
        <img src="./assets/img/carrito.png" class="carrito" alt="">
        <button id='btnEliminar-${plato.id}' class="btn-borrar">ELIMINAR</button>
        </div>
        `;
    contenedorCarrito.appendChild(cardPlato);

const btnEliminar = document.getElementById(`btnEliminar-${plato.id}`)
btnEliminar.addEventListener("click", () =>{
  eliminarDelCarrito(plato.id)
   })
  })
  }
const inputs=document.querySelectorAll("input");
const compraTotal =("renderizarCarrito");

function eliminarDelCarrito(id){
console.log("el plato " + id + " " + "se elimino");
}
eliminarDelCarrito(plato.id)

const btnBusc=document.querySelector("#btn-busc")
      btnBusc.addEventListener("click", () => {
	const input = document.getElementById("input-ingreso");
	const menu = buscarPlato(plato, input.value);
	     console.log(menu);
  });
const inputUser = document.querySelector("#user"),
    inputPass = document.querySelector("#pass"),
    check = document.querySelector("#check"),
    formulario = document.querySelector("#form-login"),
    message = document.querySelector("#message");

function guardar(valor) {
const user = { usuario: inputUser.value, pass: inputPass.value };
if(valor === "sessionStorage") {
     sessionStorage.setItem("user", JSON.stringify(user));
  }
if(valor === "localStorage") {
      localStorage.setItem("user", JSON.stringify(user));
  }
  return user;
}
function recuperarDatos(datos) {
  if(datos) {

     datos && ((inputUser.value=datos.usuario),(inputPass.value=datos.usuario))
  }
}
recuperarDatos(JSON.parse(localStorage.getItem("user")));

const btnUser= document.getElementById("input-user")
const btnPass= document.getElementById("input-pass")

const btnIngresar=document.getElementById("btn-ingresar")
      btnIngresar.addEventListener("click", validarDatos);

function validarDatos(e){
      e.preventDefault();

 const usuario= {
      nombre:inputUser.value,
      pass:inputPass.value,
  }
 }
 const btnPedido=document.querySelector("#btnPedido");
      btnPedido.addEventListener("click", () =>{
      console.log("Enviaste tu pedido")
    });
     cardPlato=document.querySelector("#cardPlato");
     cardPlato.addEventListener('mouseover',() =>{
})
const inputIngreso=inputs[0];

     btnBusc.addEventListener("click", () =>{

     cardPlato.innerHTML = `<h1>${inputIngreso.value}</h1>`
})
const menu1 = inputs[1];
const menu2 = inputs[2];

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
const btnTres=document.querySelector(".btnTres");
      btnTres.addEventListener("click", () =>{
      console.log("Se envio tu pedido")
    });
const btnLimpiar=document.querySelector(".btnLimpiar");
      btnLimpiar.addEventListener("click", () =>{
      console.log("Se elimino el plato")
    });
const btnEliminar=document.querySelector(".btnEliminar");
      btnEliminar.addEventListener("click", () =>{
      console.log("Se elimino el plato")
     });
const input1 = document.getElementById("menu1");
const input2 = document.getElementById("menu2");
input1.onchange = () => {console.log("se cambio de campo")};
input2.onchange = () => {console.log("se cambio de campo")};

const input3 = document.getElementById("user");
const input4 = document.getElementById("pass");
input3.onchange = () => {console.log("se cambio de campo")};
input4.onchange = () => {console.log("se cambio de campo")};


 const pedirPlato = (pedido) => {
  return new Promise ((resolve, reject)=> {

    setTimeout(() => {
      if (pedido) {
        resolve("Podes venir a retirar tu pedido");
      }else{
        reject("no hay guarnicion");
      }
    },1500);
  });
};

function solicitarPlato (plato){
 return new Promise ((resolve, reject) =>{
   setTimeout(() => {
     if (plato) {
        resolve("plato");
      }else{
        reject("Error de conexion");
      }
    },3000);
  });
}
contenedorPlatos = document.querySelector("#contenedorPlatos");

solicitarPlato(plato)
.then((response)=> {
  console.log(response);
})
const url=("../data.json")
fetch(url)
.then(response => response.json())
.then(data=> mostrarPlatos(plato))

  data.forEach(

function mostrarPlatos(plato) {
  console.log(plato);

  plato.forEach(plato => console.log(plato));
  const card=document.createElement('div');
  card.innerHTML= `
        <img src="${plato.img}">
        <div class ="plato-description"></div>
        <h5>${plato.nombre}</h5>
        <h6>${plato.categoria}</h6>
        <p class="precio">$${plato.precio}</p>
        <img src="./assets/img/carrito.png" class="carrito" alt="">
        <button id='${plato.id}' class="btn-compra">COMPRAR</button>
        </div>`
contenedorPlatos.appendChild(card)
});
const btnComprar=document.querySelectorAll('.btn-comprar');
btnComprar.forEach(btn=>{
  btn.addEventListener('click',(e)=>agregarAlCarrito(e.platos));

})

function agregarAlCarrito(e, platos){
  console.log(platos);
  console.log(e.target.id)
}
const platoElegido = plato.find(el =el.id===target.id)

console.log(platoElegido);