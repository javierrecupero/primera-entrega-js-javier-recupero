// let usuario1 = "javier@gmail.com";
// let password1 = "12345";

// let usuario2 = "matias@gmail.com";
// let password2 = "67890";

// let intentos = 0; 

// function login(){
//     for (i = 0; i <= 3; i++) {
//         usuario = prompt("Ingrese su usuario: ");
//         password = prompt("Ingrese su password: ");
//         console.log(usuario);
//         console.log(password);
//         if (usuario == usuario1 && password == password1) {
//             alert("Bienvenido" + usuario1);
//             console.log("inicio de sesion de: " + usuario1);
//             break;
//         } else if(usuario == usuario2 && password == password2) {
//             alert("Bienvenido" + usuario2);
//             console.log("inicio de sesion de: " + usuario2);
//             break;
//         }else if ((usuario != usuario1 && password != password1) || (usuario != usuario2 && password != password2)){
//             intentos ++;
//             console.log("estoy aca");
//             alert("Te quedan: " + (3 - intentos) + "intentos de: " + 3);
//             console.log("Le quedan: " + (3 - intentos) + "al usuario: " + usuario);
//         }
//         if (intentos == 3){
//             alert("Se te acabaron los intentos posibles");
//             window.location="pages/error.html"; 
//             break;
//         }
//     }
// }


// CREE UN ARRAY DE 3 OBJECTOS CON 2 ATRIBUTOS

//const hamburguesas = [
   // hamburguesa_1 = {nombre: "de carne", precio: 1000},
    //hamburguesa_2 = {nombre: "de pollo", precio: 800},
    //hamburguesa_3 = {nombre: "de lentejas", precio: 600} 
//]

// ACA PIDO EL NUMERO PARA AUMENTAR EL PRECIO

//porcentaje_incremento  = parseFloat(prompt("Ingrese precio actuaizado en porcentaje: "));

// ACA ITERO EL ARRAY DE OBJETOS Y SACO EL PRECIO A AUMENTAR Y RETURNAMOS SU AUMENTO CON SU PRECIO FINAL

//const precioFinal = hamburguesas.map(function mapper(hamburguesa){
    //let precioAumentado = ((hamburguesa.precio * porcentaje_incremento) / 100)
    //let precioFinal = hamburguesa.precio + precioAumentado;
    //return hamburguesa.nombre + " aumento: $" + precioAumentado + " precio final: $" + precioFinal;
//});

// MOSTRAMOS EL RESULTO POR CONSOLA

//console.log(precioFinal);



//JSON de productos

product1 = {
    'name'   : 'Hamburguesa 1',
    'price'   : 1000
};

product2 = {
    'name'   : 'Hamburguesa 2',
    'price'   : 2000
};

product3 = {
    'name'   : 'Hamburguesa 3',
    'price'   : 3000
};

products = [product1, product2, product3];

//Aplicamos dom y uso de eventos

let ul = document.createElement('ul');
ul.setAttribute('id','proList');

let list = document.getElementById('renderList');
let button = document.getElementById('button-ver-productos');

list.style.display = "none";

button.addEventListener('click', () => {
    list.style.display = "block";
    list.appendChild(ul);
    products.forEach(renderProductList);
    button.style.display = "none";
});


function renderProductList(element, index, arr) {
    let li = document.createElement('li');
    li.setAttribute('class','item');

    ul.appendChild(li);

    li.innerHTML = li.innerHTML + element.name + ' $ ' + element.price;
}

//Guardamos la informacion en el Storage

const saveProduct = (index, element) => {localStorage.setItem(index,element)}
for (product of products)
    guardarProd(product.id, JSON.stringify(products))