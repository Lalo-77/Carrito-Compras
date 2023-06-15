console.log("saludar" +" "+ "Bienvenido al Restaurant La Fortaleza");
// cristian nuñez

const platos = [
    {
        id:1,
        nombre:"La fortaleza",
        img:"./assets/img/brooke.jpg",
        precio: 2000,
        descripcion:"calorias:150,carbohidratos:60,fibras:30,grasasSaturadas:0,",
        categoria: "plato principal",
        },
    {
        id:2,
        nombre:"Especial",
        img:"./assets/img/Especial.jpg",
        precio: 2300,
        descripcion:" calorias:150,carbohidratos:30,fibras:40,grasasSaturadas:0,",
        categoria:"entrada",
        },
    {
        id:3,
        nombre:"Rubi",
        img:"./assets/img/Rubi.jpg",
        precio:2500,
        descripcion:"calorias:110,carbohidratos:40,fibras:20,grasasSaturadas:0,",
        categoria:"plato principal",
        },
    {
        id:4,
        nombre:"Hamburguesa",
        img:"./assets/img/Hamburguesa.jpg",
        precio:2500,
        descripcion:"calorias:130,carbohidratos:30,fibras:20,grasasSaturadas:0,",
        categoria:"entrada",
        },
    {
        id:5,
        nombre:"Jugo de zanahoria",
        img:"./assets/img/jugo de zanahoria.jpg",
        precio:1200,
        descripcion:"calorias:130,carbohidratos:70,fibras:40,grasasSaturadas:0,",
        categoria:"postre",
        },
    {
        id:6,
        nombre:"Ensalada de palta queso tomate y cebolla",
        img:"./assets/img/varios.jpg", 
        precio:1800,
        descripcion:"calorias:120,carbohidratos:30,fibras:20,grasasSaturadas:0,",
        categoria:"Plato princioal",
        },
    {
        id:7,
        nombre:"Pastel de brocoli con queso",
        img:"./assets/img/especialidad2.jpg",
        precio:1700,
        descripcion:"calorias:100,carbohidratos:40,fibras:10,grasasSaturadas:0,",
        categoria:"entrada",
        },
    {
        id:8,
        nombre:"Pollo salteado con brocoli y soja",
        img:"./assets/img/especialidad3.jpg",
        precio:1600,
        descripcion:" calorias:80,carbohidratos:40,fibras:20,grasasSaturadas:0,",
        categoria:"plato principal",
        },
    {
        id:9,
        nombre:"Salmon con arroz cebolla y pepino",
        img:"./assets/img/especialidad5.jpg",
        precio:1700,
        descripcion:"calorias:150,carbohidratos:50,fibras:15,grasasSaturadas:0,",
        categoria:"plato principal",
        },
    {
        id:10,
        nombre:"Frutas",
        img:"./assets/img/especialidad6.jpg",
        precio:1800,
        descripcion:"calorias:50,carbohidratos:20,fibras:10,grasasSaturadas:0,",
        categoria:"postre",
        },
    ]
const carrito = []

const listado = platos.reduce((acc, el)=>acc +=`${el.id}-${el.nombre}-precio:$${el.precio}\n`,"0");

const seleccion = parseInt(prompt("Ingrese el numero de plato que decea, ingrese 'no' para salir\n" + listado));

if (seleccion  === 0 || isNaN(seleccion)) {
    calcularTotal();
}
const buscarPlato = platos.find(plato => plato.id === seleccion);

    console.log(buscarPlato);

    carrito.push(buscarPlato);

    console.log(carrito);

const continuarCompra = confirm("Decea seleccionar algo mas?/n");
const menu = platos
if(continuarCompra){
    mostrarPlatos();

}else{
    calcularTotal();
    }

function calcularTotal(){

const total = carrito.reduce 
console.log(carrito);
((acc,el)=> acc + el.precio, 0);

    alert(`El total a pagar por su compra es: $${total}`);
}
function filtrarPorPrecio(filtro){
const menu = menu.filter((el) =>el.precio <filtro)
return menu;
}
let ingreso= prompt("ingrese un precio");
let param = prompt("ingresa criterio");
const menorPrecio=filtrarPorPrecio
(ingreso)
console.log(menorPrecio);

function filtrar(plato, filter, param){
    platos.filter(el =>{
if (param === "id"){

    return el.id == filter
}else if(param ==='precio'){
    
    return el.precio <= filter
}else{
    return el[param].includes(filter)
        }
    })
}
console.log(filtrar(menu,ingreso,param));

const filtroPorCategoria = platos.filter(alimento =>alimento.categoria ==='plato principal');
let 
const filtrarPorNutricion =platos.filter(alimento=>alimento.nutricion ==='natural');

    console.log(filtrarPorNutricion);

    
    const filtrarPorNombre1 = new Array
    (["la Fortaleza","2000","Especial","1900","Rubi","2500","Hamburguesa","2500","jugo de zanahoria","1200","Ensalada palta queso tomate y cebolla","1800",
    "pastel de brocoli con queso","1500","Pollo salteado con brocoli y soja","1800","Salmon con arroz cebolla y pepino","2000","Frutas","1200"]);

    function saludar(nombre, apellido){
        console.log("Hola"+ "saludar");
    }

    mostrarPlatos = (menu) => {
    menu.forEach( platos =>{

const cardPlato = document.createElement('div');
    cardPlato.setAttribute('id', 'tarjeta-plato');
    cardPlato.innerHTML =
    mostrarPlatos.appendChild(cardPlato);

    })
const btnComprar =document.querySelectorAll('.btn-compra');
    btnComprar.forEach(el =>{
        el.addEventListener('click', (e)=>{
        agregarAlCarrito(e.target.id)
        });
    })
}
let todoslosPlatos = platos.map((plato) => plato.nombre + "" + 
plato.precio + "$");
alert(todoslosPlatos.join(" - ")) 

const contenedorPlatos = document.querySelector('#contenedorPlatos');

const mostrarPlatos=(data) => {
    data.forEach(plato =>{
const cardPlato = document.createElement('div');
    cardPlato.setAttribute('id', 'tarjetaPlato');
    cardPlato.innerHTML=`
        <img-class="plato-img" src="${plato?.img}" alt="${plato?.nombre}" style="width:75px"
        <div class="plato-description">
        <h5 class="obra-nombre">${plato?.nombre}</h5>
        <h5 class="obra-autor">${plato?.autor}</h5>

        <button id='${plato.id}' class="btn-compra">COMPRAR</button>
        </div>
        `;
    contenedorPlatos.appendChild(cardPlato);
})
function menu(nombre,descripcion,categoria,precio,img){
this.id = menu.length + 1;
this.nombre = nombre;
this.descripcion = descripcion;
this.categoria = categoria;
this.precio = parceFloat(precio);
if (!img){
    this.img="../assets/img/not-found-image-15383864787lu.jpg";
}else {
    this.img=img;
}
}
console.log(menu)
const btnComprar = document.querySelectorAll('.btn-compra');
    btnComprar.forEach(el =>{
    el.addEventListener('click',(e) =>{
        agregarAlCarrito(e.target.id)
    });
})
};
function agregarAlCarrito(id){
    console.log(id);
    let platoEncontrado = platos.find(plato=>plato.id === parceInt(id));

carrito.push(platoEncontrado)
console.log(carrito)
}
const existe = carrito.some(plato => platos.id === parceInt(id));

if (existe) {
    platoEnCarrito.cantidad++

}else{
let platoEncontrado = platos.find(platos=> platos.id === parseInt(id));
    carrito.push(platoEncontrado);
}

carrito.map(platos => platos.id === parceInt(id));
platos= document.getElementById('platos')

for (const nombre of platos) {
const li= document.createElement('li')
    li.innerText= platos
    platos.appendChild(li)
}
platos=document.getElementsByClassName('plato')
for (const plato of platos){
    console.log(plato.innerHTML);
}
function actualizarCarrito(e){
    platos=e.target;
const id=platos.getAtribute('data-id');
    parceFloat(platos.getAtribute('data-precio'));

const platoEnCarrito= carrito.platos.find(p.id===id);
if (platoEnCarrito){
    platoEnCarrito.cantidad++;
}else {
        carrito.plato.push({id,precio,cantidad:1});

    }
carrito,total+=precio;
}
platos.forEach(plato=>{
})
btnComprar1.addEventListener('click', ()=>{
    console.log("Seleccionaste tu pedido");
})
btnComprar2.addEventListener('click', ()=>{
    console.log("seleccionaste tu pedido"); 
})
btnComprar3,addEventListener('click', () =>{
    console.log("Seleccionaste tu pedido");
})
btnComprar4,addEventListener('click', () =>{
    console.log("Seleccionaste tu pedido");
})
btnComprar5,addEventListener('click', () =>{
    console.log("Seleccionaste tu pedido");
})
btnComprar6,addEventListener('click', () =>{
    console.log("Seleccionaste tu pedido");
})
btnComprar7,addEventListener('click', () =>{
    console.log("Seleccionaste tu pedido");
})
btnComprar8,addEventListener('click', () =>{    
    console.log("Seleccionaste tu pedido");
})
btnComprar9,addEventListener('click', () =>{
    console.log("Seleccionaste tu pedido");
})
btnComprar10,addEventListener('click', () =>{
    console.log("Seleccionaste tu pedido");
})

    platos.forEach(plato => {
    contenedorPlatos,appendChild(platos)

const cardMenu = document.createElement("div")
    cardMenu.innerHTML
    
        menuContainer.append(cardMenu)
const botonComprar= document.getElementById("comprar" + plato.id)

    botonComprar.addEventListener("click", () => {

        carrito.push(plato)
    })
})
const amarillo= document.getElementById('amari');
    amarillo.addEventListener('submit',function(e){
    e.preventDefault();

let nombre= document.getElementById('nombre').value
    console.log(nombre)
}) 

    amarillo = document.getElementById('amari');
    amarillo.addEventListener('submit', function (e){
    e.preventDefault();
let apellido= document.getElementById('apellido').value
    console.log(apellido)
});
amarillo = document.getElementById('amari');
amarillo.addEventListener('submit', function (e){
    e.preventDefault();
    let email = document.getElementById('email').nodeValue
    console.log(email)
})
const doc = document;

function searchFilters(input,selector){
    doc.addEventListener("keyup",(e)=> {
    if(e.target.matches(input)){
    console.log(e.key);
    console.log(e,target.value);
    doc.querySelectorAll(selector),forEach((el) =>
    el.textContent.toLowerCase().includes(e.target.value)
    ? el.classList.remmove("filter")
    :e.classList.add("filter")
    );
}
});
}
