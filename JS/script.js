/* 
//SESION

function Usuario(email, password) {
	this.email = email;
	this.password = password;
}

const cuentas = [];
cuentas.push(new Usuario("lautibacega@gmail.com", "12345"));

let opcion = prompt("Para empezar a comprar debe iniciar sesion o registrarse, elija una opcion:\n 1 - Iniciar Sesion\n 2 - Registrarse\n 3 - Salir ");

// Funciones ----------------------------
//REGISTRO EMAIL
function registro(){
    //REGISTRO EMAIL
    let email = prompt("Ingrese un Email");

    while (cuentas.some((usuario) => usuario.email === email)) {
        alert("Este email ya se encuentra registrado, intente con otro");
        email = prompt("Ingrese un Email");
    }

    const password = prompt("Ingrese una Contraseña");
    cuentas.push(new Usuario(email, password));
    alert("Registro completado correctamente");
}

// TIENDA
function tienda(){
    let precioTotal = 0
let totalFinal = 0

function Producto(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarStock = function(cantidad){ // recibe como parametro la cantidad, creo metodo para actualizar stock
        this.stock -= cantidad
    }
}

function calculadoraPrecioTotal (cantidadReloj,reloj){
    precioTotal = cantidadReloj * reloj
    totalFinal = totalFinal  + precioTotal
    alert("El precio total es $" + precioTotal)
}

let reloj1 = new Producto("Reloj Automatico",100,5)
let reloj2 = new Producto("Reloj a Cuerda",200,5)
let reloj3 = new Producto("Reloj con Calendario",300,5)
let reloj4 = new Producto("Reloj con Segundero",400,5)

let listaProductos = [reloj1,reloj2,reloj3,reloj4]

let cantidadCompra = prompt("Hola, ingrese la cantidad de productos que desea que comprar!!")

for(let i = 0; i < cantidadCompra; i++){

    let reloj = prompt("Seleccione un producto: \n1 - Reloj Automatico\n2 - Reloj a Cuerda\n3 - Reloj con Calendario\n4 - Reloj con Segundero\n5 - Salir")

    while(reloj != 5){
        if(reloj == 1 ){
            let cantidadReloj = prompt("¿Cuantos " + reloj1.nombre + " desea comprar?")
            if (cantidadReloj <= reloj1.stock){
                calculadoraPrecioTotal (cantidadReloj,reloj1.precio)
                break;
            }
            else{
                alert("No tenemos suficiente stock, la cantidad de stock es de " + reloj1.stock + " unidades.")
            }
        }
        else if (reloj == 2 ){
            let cantidadReloj = prompt("¿Cuantos " + reloj2.nombre + " desea comprar?")
            if (cantidadReloj <= reloj2.stock){
                calculadoraPrecioTotal(cantidadReloj,reloj2.precio)
                break;
            }
            else{
                alert("No tenemos suficiente stock, la cantidad de stock es de " + reloj2.stock + " unidades.")
            }
        }
        else if (reloj == 3 ){
            let cantidadReloj = prompt("¿Cuantos " + reloj3.nombre + " desea comprar?")
            if (cantidadReloj <= reloj3.stock){
                calculadoraPrecioTotal(cantidadReloj,reloj3.precio)
                break;
            }
            else{
                alert("No tenemos suficiente stock, la cantidad de stock es de " + reloj3.stock + " unidades.")
            }
        }
        else if (reloj == 4 ){
            let cantidadReloj = prompt("¿Cuantos " + reloj4.nombre + " desea comprar?")
            if (cantidadReloj <= reloj4.stock){
                calculadoraPrecioTotal(cantidadReloj,reloj4.precio)
                break;
            }
            else{
                alert("No tenemos suficiente stock, la cantidad de stock es de " + reloj4.stock + " unidades.")
            }
        }
        else{
            alert("Ingrese una opcion valida")
            break;
        }
    }
}
alert("El total final a pagar a pagar es de: $" + totalFinal)
alert("Gracias por su compra")
}

while (opcion != 3) {
	if (opcion == 1) {
		// INICIO SESION EMAIL
		const email = prompt("Ingrese su Email");
		if (!cuentas.some((usuario) => usuario.email === email)) {
			//si el email no coincide con uno de los mails que se ubica en el array entonces...
			alert("Este email no se encuentra registrado, por favor registrese");
            registro();
            tienda();
            break;
		} else {
			//INICIO SESION CONTRASEÑA
			const password = prompt("Ingrese su Contraseña");

			if (!cuentas.some((usuario) => usuario.password === password)) {
				alert("Contraseña inválida");
			} else {
				alert("Sesion iniciada correctamente!!");
			}
            tienda();
            break;
		}
	} else if (opcion == 2) {
		registro();
        tienda();
        break;
	}
	//opcion = prompt("1 - Iniciar Sesion\n 2 - Registrarse\n 3 - Salir ");
}

console.log(cuentas); */


/* //SESION

function Usuario(email, password) {
	this.email = email;
	this.password = password;
}

const cuentas = [];
cuentas.push(new Usuario("lautibacega@gmail.com", "12345"));

// Funciones ----------------------------
//REGISTRO EMAIL

let buttonRegistro = document.getElementById("buttonRegistro")

buttonRegistro.addEventListener("click",registro)

let emailRegistro = document.getElementById("emailRegistro")
let passwordRegistro = document.getElementById("passwordRegistro")
let dniRegistro = document.getElementById("dniRegistro")

function registro(){
    //REGISTRO EMAIL
    let email = document.getElementById("emailRegistro")
    let password = document.getElementById("passwordRegistro")
    let dni = document.getElementById("dniRegistro")

    while (cuentas.some((usuario) => usuario.email === email)) {
        let alerta = document.createElement("li")
        email = prompt("Ingrese un Email");
    }

    // const password = prompt("Ingrese una Contraseña");
    // cuentas.push(new Usuario(email, password));
    // alert("Registro completado correctamente");
} */


const listaDeProductos = [
    {
        id: 1,
        nombre: "Reloj 1",
        precio: 100,
        stock: 10,
        descuento1: "-5%",
        descuento2: 50,
        img: "./IMG/IMG_20191229_155551.jpg"
    },
    {
        id: 2,
        nombre: "Reloj 2",
        precio: 120,
        stock: 10,
        descuento1: "-5%",
        descuento2: 50,
        img: "./IMG/IMG_20191229_155551.jpg"
    },
    {
        id: 3,
        nombre: "Reloj 3",
        precio: 210,
        stock: 102,
        descuento1: "-5%",
        descuento2: 50,
        img: "./IMG/IMG_20191229_155551.jpg"
    },
    {
        id: 4,
        nombre: "Reloj 4",
        precio: 600,
        stock: 1,
        descuento1: "-5%",
        descuento2: 50,
        img: "./IMG/IMG_20191229_155551.jpg"
    },
    {
        id: 5,
        nombre: "Reloj 5",
        precio: 80,
        stock: 12,
        descuento1: "-5%",
        descuento2: 50,
        img: "./IMG/IMG_20191229_155551.jpg"
    },
    {
        id: 6,
        nombre: "Reloj 6",
        precio: 80,
        stock: 12,
        descuento1: "-5%",
        descuento2: 50,
        img: "./IMG/IMG_20191229_155551.jpg"
    }
]

/* let catalog = document.getElementById('box-container') // donde van a ir ubicadas las cards
let cart = [] //creamos un array vacio donde el usuario va a almacenar los productos

//tutor
// const contenedorProductos = document.getElementById('contenedor-productos')
// const contenedorCarrito = document.getElementById('carrito-contenedor')
// const contadorCarrito = document.getElementById('contadorCarrito')
// const precioTotal = document.getElementById('precioTotal')
// const botonVaciar = document.getElementById('vaciar-carrito')
// const carrito = []
// botonVaciar.addEventListener('click', () => {
//     // carrito = [] // si tengo carrito como LET
//     carrito.length = 0
//     actualizarCarrito()
// })

let products = document.createElement('div')
products.classList.add('box-container')

listaDeProductos.forEach((prod) => {

    catalog.innerHTML += `
    <div class="box">
        <span class="discount">${prod.descuento1}</span>
        <div class="image">
            <img src="./IMG/IMG_20191229_155551.jpg" alt="">
        </div>
        <div class="content">
            <h3>${prod.nombre}</h3>
            <div class="price">$${prod.descuento2}<span>$${prod.precio}</span> </div>
        </div>
        <button class="btn" id="${prod.id}">Agregar al Carrito</button>
    </div>
    `
    //let cardButton = document.getElementById('buttonCarrito')
    //cardButton.setAttribute('mark', prod.id) //le asigna un atributo a ese elemento, diferenciando asi los botones entre productos
    
    //cardButton.addEventListener('click', addProdToCart)


    catalog.appendChild(div)
    // const boton = document.getElementById(`agregar${producto.id}`)
    // boton.addEventListener('click', () => {
    //     agregarAlCarrito(producto.id)
    // })

})
mostrarProductos(stockProductos) */


const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')
const botonVaciar = document.getElementById('vaciar-carrito')
const carrito = []
botonVaciar.addEventListener('click', () => {
    carrito = [] // si tengo carrito como LET
    carrito.length = 0
    actualizarCarrito()
})

const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = ""
    array.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <img src=${prod.img} alt="">
                    <h3>${prod.nombre}</h3>
                    <p>${prod.descuento1}</p>
                    <p>Talle: ${prod.talle}</p>
                    <p class="precioProducto">Precio: $${prod.precio}</p>
                    <button onclick="agregarAlCarrito(${prod.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>`

        contenedorProductos.appendChild(div)
    })
}

const agregarAlCarrito = (prodId) => { 
    const item = stockProductos.find( (prod) => 
    prod.id === prodId) 
    carrito.push(item)   
    actualizarCarrito() 
    console.log(carrito)
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find( (prod) => prod.id === prodId )
    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach( (prod) => {
        const div = document.createElement('div')
        div.className = "productoEnCarrito"
        div.innerHTML = `
                    <p>${prod.nombre}</p>
                    <p>Precio: $${prod.precio}</p>
                    <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}