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
  let platoEncontrado = plato.find((plato) => plato.id == id);

  carrito.push({ id, precio, cantidad: 1 });
  carrito.total += precio;
  actualizarCarrito();

  const existe = carrito.some((plato) => plato.id == id);

  if (existe) {
    platoEnCarrito.cantidad++;
  } else {
    platoEncontrado = plato.find((plato) => plato.id == id);
    carrito.push(platoEncontrado);
  }

  carrito.map((platos) => platos.id == id);
  let plato = document.getElementById("plato");
}
const listado = plato.reduce(
  (acc, el) => (acc += `${el.id}-${el.nombre}-precio:$${el.precio}\n`),"0");

if (seleccion === 0 || isNaN(seleccion)) {
  calcularTotal();
}
const buscarPlato = plato.find((plato) => plato.id === Number);

const encontrado = plato.find((el) => {
  return el.nombre.includes(buscarPlato);
});
//console.log(buscarPlato);

carrito.push(buscarPlato);

//console.log(carrito);

let continuarCompra = "carrito";

const menu = plato;
if (continuarCompra) {
  mostrarPlatos();
} else {
  calcularTotal();
}
function calcularTotal() {
  const total = carrito.reduce((acc, el) => (acc += el.precio), 0);
  console.log(carrito);
}
function filtrarPorPrecio(filtro) {
  const menu = menu.filter((el) => el.precio < filtro);
  return menu;
}
/*const menorPrecio=filtrarPorPrecio
(ingreso)
console.log(menorPrecio);*/

function filtrar(plato, filter, param) {
  plato.filter((el) => {
    if (param === "id") {
      return el.id == filter;
    } else if (param === "precio") {
      return el.precio <= filter;
    } else {
      return el[param].includes(filter);
    }
  });
}
const filtroPorCategoria = plato.filter(
  (alimento) => alimento.categoria === "plato principal"
);

const filtrarPorNutricion = plato.filter((alimento) => alimento === "natural");

console.log(filtrarPorNutricion);

const filtrarPorNombre1 = new Array([
  "la Fortaleza",
  "2000",
  "Especial",
  "1900",
  "Rubi",
  "2500",
  "Hamburguesa",
  "2500",
  "jugo de zanahoria",
  "1200",
  "Ensalada palta queso tomate y cebolla",
  "1800",
  "pastel de brocoli con queso",
  "1500",
  "Pollo salteado con brocoli y soja",
  "1800",
  "Salmon con arroz cebolla y pepino",
  "2000",
  "Frutas",
  "1200",
]);

function saludo(nombre, apellido) {
  console.log("Hola" + "Te damos la Bienvenida");
}
let todoslosPlatos = plato.map(
  (plato) => plato.nombre + "" + plato.precio + "$"
);
alert(todoslosPlatos.join(" - "));

function seleccion(nombre, descripcion, categoria, precio, img) {
  this.id = menu.length + 1;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.categoria = categoria;
  this.precio = parceFloat(precio);
  if (!img) {
    this.img = "../assets/img/not-found-image-15383864787lu.jpg";
  } else {
    this.img = img;
  }
}
function actualizarCarrito(e) {
  plato = e.target;
  const id = platos.getAtribute("data-id");
  parceFloat(plato.getAtribute("data-precio"));

  const platoEnCarrito = carrito.plato.find(p.id === id);
  if (platoEnCarrito) {
    platoEnCarrito.cantidad++;
  } else {
    carrito.plato.push({ id, precio, cantidad: 1 });
  }
  carrito, (total += precio);
}
plato.forEach((plato) => {});
/*

    plato.forEach(plato => {
    contenedorPlatos,appendChild(platos)

const cardMenu = document.createElement("div")
    cardMenu.innerHTML
    
        menuContainer.append(cardMenu)
const botonComprar= document.getElementById("comprar" + plato.id)

    botonComprar.addEventListener("click", () => {

        carrito.push(plato)
    })
    amarillo = document.getElementById('amari');
    amarillo.addEventListener('submit', function (e){
    e.preventDefault();
let apellido= document.getElementById('apellido').value
    console.log(apellido)
});*/

const doc = document;

function searchFiltro(input, selector) {
  doc.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      console.log(e.key);
      console.log(e, target.value);
      doc.querySelectorAll(selector),
        forEach((el) =>
          el.textContent.toLowerCase().includes(e.target.value)
            ? el.classList.remmove("filter")
            : e.classList.add("filter")
        );
    }
  });
}
const btnBuscar = document.querySelector('#btnBuscar')


btnBuscar.addEventListener('click', () => {

    console.log("hiciste click");
})

const inputUser = document.querySelector("#user"),
  inputPass = document.querySelector("#pass"),
  check = document.querySelector("#check"),
  formulario = document.querySelector("#form-login"),
  message = document.querySelector("#message");

function guardar(valor) {
  const user = { usuario: inputUser.value, pass: inputPass.value };
  //validar si los campos estan vacios
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

/*formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (check.checked) {
    guardar("localStorage");
  } else {
    guardar("sessionStorage");
  }
});*/
