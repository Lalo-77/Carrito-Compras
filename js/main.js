alert("Bienvenido al Restaurant La Fortaleza");

// cristian nuñez

const platos = [
    {
        id:1,
        nombre:"La fortaleza",
        img:"./assets/img/brooke.jpg",
        precio: 2000,
        descripcion:"",
        calorias:150,
        carbohidratos:60,
        fibras:30,
        grasasSaturadas:0,
        categoria: "plato principal",
        },
    {
        id:2,
        nombre:"Especial",
        img:"./assets/img/Especial.jpg",
        precio: 2300,
        descripcion:"",
        calorias:150,
        carbohidratos:30,
        fibras:40,
        grasasSaturadas:0,
        categoria:"entrada",
        },
    {
        id:3,
        nombre:"Rubi",
        img:"./assets/img/Rubi.jpg",
        precio:2500,
        descripcion:"",
        calorias:110,
        carbohidratos:40,
        fibras:20,
        grasasSaturadas:0,
        categoria:"plato principal",
        },
    {
        id:4,
        nombre:"Hamburguesa",
        img:"./assets/img/Hamburguesa.jpg",
        precio:2500,
        descripcion:"",
        calorias:130,
        carbohidratos:30,
        fibras:20,
        grasasSaturadas:0,
        categoria:"entrada",
        },
    {
        id:5,
        nombre:"Jugo de zanahoria",
        img:"./assets/img/jugo de zanahoria.jpg",
        precio:1200,
        descripcion:"",
        calorias:130,
        carbohidratos:70,
        fibras:40,
        grasasSaturadas:0,
        categoria:"postre",
        },
    {
        id:6,
        nombre:"Ensalada de palta queso tomate y cebolla",
        img:"./assets/img/varios.jpg", 
        precio:1800,
        descripcion:"",
        calorias:120,
        carbohidratos:30,
        fibras:20,
        grasasSaturadas:0,
        categoria:"Plato princioal",
        },
    {
        id:7,
        nombre:"Pastel de brocoli con queso",
        img:"./assets/img/especialidad2.jpg",
        precio:1700,
        descripcion:"",
        calorias:100,
        carbohidratos:40,
        fibras:10,
        grasasSaturadas:0,
        categoria:"entrada",
        },
    {
        id:8,
        nombre:"Pollo salteado con brocoli y soja",
        img:"./assets/img/especialidad3.jpg",
        precio:1600,
        descripcion:"",
        calorias:80,
        carbohidratos:40,
        fibras:20,
        grasasSaturadas:0,
        categoria:"plato principal",
        },
    {
        id:9,
        nombre:"Salmon con arroz cebolla y pepino",
        img:"./assets/img/especialidad5.jpg",
        precio:1700,
        descripcion:"",
        calorias:150,
        carbohidratos:50,
        fibras:15,
        grasasSaturadas:0,
        categoria:"plato principal",
        },
    {
        id:10,
        nombre:"Frutas",
        img:"./assets/img/especialidad6.jpg",
        precio:1800,
        descripcion:"",
        calorias:50,
        carbohidratos:20,
        fibras:10,
        grasasSaturadas:0,
        categoria:"postre",
        },
    ]
const carrito = []

function mostrarPlatos () {

const listado = platos.reduce((acc, el)=>acc +=`${el.id}-${el.nombre}-precio:$${el.precio}\n`,"0");

const seleccion = parseInt(prompt("Ingrese el numero de plato que decea, ingrese 'no' para salir\n" + listado));

if (seleccion  === 0 || isNaN(seleccion)) {
    calcularTotal();
    return;
}
const buscarPlato = platos.find(plato => plato.id === seleccion);

    console.log(buscarPlato);

    carrito.push(buscarPlato);

    console.log(carrito);

const continuarCompra = confirm("Decea seleccionar algo mas?/n");

if(continuarCompra){
    mostrarPlatos();

}else{
    calcularTotal();
    }

}
function calcularTotal(){

const total = carrito.reduce((acc,el)=> acc + el.precio, 0);

    alert(`El total a pagar por su compra es: $${total}`);
}
filtroPorPrecio = platos.filter(alimento =>alimento.precio < 2000);

const filtroPorCategoria = platos.filter(alimento =>alimento.categoria ==='plato principal');

const filtrarPorNutricion =platos.filter(alimento=>alimento.nutricion ==='natural');

    console.log(filtrarPorNutricion);

    console.log(filtroPorPrecio);

    mostrarPlatos()

    const filtrarPorNombre1 = new Array
    (["la Fortaleza","2000","Especial","1900","Rubi","2500","Hamburguesa","2500","jugo de zanahoria","1200","Ensalada palta queso tomate y cebolla","1800",
    "pastel de brocoli con queso","1500","Pollo salteado con brocoli y soja","1800","Salmon con arroz cebolla y pepino","2000","Frutas","1200"]);


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


