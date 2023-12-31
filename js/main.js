const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedorPlatos = document.querySelector("#contenedorPlatos");
const contenedorCarrito=document.querySelector("#contenedorCarrito");

const mostrarPlatos = (data) => { 
      contenedorPlatos.innerHTML = "";
      data.forEach((plato) => {

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
function buscarPlato(array,filtro){
const encontrado = array.find ((el) => {
      return el.nombre.includes(filtro);
});
      fetch("./data.json")

      const menu = buscarPlato(inputs.value);
}
function agregarAlCarrito(id) {
      fetch("./data.json")
      .then((res) => res.json())
      .then((plato) => {
console.log(id);

const existe = carrito.some((plato) => plato.id === parseInt(id));
      console.log(existe);

      if (existe) {

const indice = carrito.findIndex((p) => p.id === parseInt(id));
      carrito[indice].cantidad++;
} else {

let platoEncontrado = plato.find((p) => p.id == parseInt(id));
      console.log(platoEncontrado);
      carrito.push({
      id: platoEncontrado.id,
      nombre: platoEncontrado.nombre,
      precio: platoEncontrado.precio,
      cantidad: 1,
      categoria: platoEncontrado.categoria,
      img: platoEncontrado.img,
});
      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderizarCarrito();
}
precioCarrito()
      });
}

// precio del carrito

function precioCarrito() {

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
      console.log(total);

const mostrarTotal = document.getElementById("total");
      mostrarTotal.innerText = total;
      localStorage.setItem("mostrarTotal", JSON.stringify(mostrarTotal));
};

const btnCrear=document.querySelector(".btn-crear");
      btnCrear.addEventListener("click", () =>{
      console.log("Enviaste tu pedido")
      });

function renderizarCarrito(){
      contenedorCarrito.innerHTML = ""
      carrito.forEach( plato => {

const cardPlato = document.createElement("div");
      cardPlato.setAttribute("id","cardPlato");
      cardPlato.innerHTML = `
            <img src="${plato.img}" class="pl-img">
            <div class ="plato-descrip">
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
function borrarPlato () {
      borrarPlato.querySelector("div").innerHTML= "";
      carrito.splice(0,carrito.length)
      localStorage.setItem("carrito",JSON.stringify(carrito));
}

const inputs=document.querySelectorAll("input");
const compraTotal =("renderizarCarrito");

//function eliminar plato

function eliminarDelCarrito(id){

const platoFliltrado = carrito.find(plato=>plato.id === id);
      console.log(platoFliltrado);
const index = carrito.indexOf(platoFliltrado)
      console.log(index);
      carrito.splice(index, 1)

      console.log("el plato " + id + " " + "se elimino");
      renderizarCarrito()
      localStorage.setItem("carrito", JSON.stringify(carrito));
}
const btnBusc=document.querySelector("#btn-busc")
      btnBusc.addEventListener("click", () => {
const input = document.getElementById("input-ingreso");
const platoBusqueda = input.value.toLowerCase();
	console.log(platoBusqueda);

fetch("./data.json")
.then((res) => res.json())
.then((data) => {

const arrayFiltrado = data.filter(p => p.nombre.toLowerCase() === platoBusqueda);
      console.log(arrayFiltrado);
     mostrarPlatos(arrayFiltrado);
   });
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

function validarDatos(e){
      e.preventDefault();

const usuario= {
      nombre:inputUser.value,
      pass:inputPass.value,
      }
}
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

let   option= select.options[select.selectedIndex].value
      console.log(option);
})
const btnTres=document.querySelector(".btnTres");
      btnTres.addEventListener("click", () =>{
            Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Tu  compra se efectuo con exito',
                  showConfirmButton: false,
                  timer: 5000,
            })
});
const input3 = document.getElementById("user");
const input4 = document.getElementById("pass");
      input3.onchange = () => {console.log("se cambio de campo")};
      input4.onchange = () => {console.log("se cambio de campo")};


const card=document.createElement('div');
      contenedorPlatos.appendChild(card);

const btnComprar=document.querySelectorAll('.btn-comprar');
      btnComprar.forEach(btn=>{
      btn.addEventListener('click',(e)=>agregarAlCarrito(e.platos));

})

fetch("./data.json")
.then((res) => res.json())
.then((data) => {
      console.log(data);
      mostrarPlatos(data);
});
      renderizarCarrito()
