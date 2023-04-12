//// FAQ
/*SECCION QUESTIONS AND ANSWER*/
const imageArray = document.querySelectorAll(".botonFlecha");
imageArray.forEach((image, i) => {
    image.addEventListener("click", () => {
        const text = document.getElementsByClassName("aparecer");
        if (text[i].style.display !== "none") {
            text[i].style.display = "none";
            image.src = "./assets/flecha abajo.png";
        } else {
            text[i].style.display = "block";
            image.src = "./assets/flecha arriba.png";
        }
    })
});

///CARRITO
/*TIENDA Y CESTA */
const divProductos = document.querySelectorAll(".boxesPoductos > .coffe");
const arrayProductos = [];

divProductos.forEach(añadir => {
    const boton = añadir.lastElementChild;

    boton.addEventListener("click", (event) => {
        const objProductos = {};
        const infoProdcutos = event.target.parentNode.children;
        objProductos.cantidad = 1;
        objProductos.imagen = infoProdcutos[0].src;
        objProductos.name = infoProdcutos[1].innerText;
        objProductos.precio = infoProdcutos[2].innerText;
        objProductos.id = 0;
        arrayProductos.push(objProductos);
        console.log(arrayProductos);

        localStorage.setItem("productosAgregados", JSON.stringify(arrayProductos));
        const añadirCesta = localStorage.getItem(arrayProductos);

        if (objProductos.cantidad == 1) {
            objProductos.cantidad++;
        }
    });


});



///// incrementamos
//const spanCounter = document.getElementById("counter");
// const div = document.getElementById("counter-btns");
// const botonMas = div.firstElementChild;
// const botonMenos = div.lastElementChild;

// botonMas.addEventListener("click", function (){
//     spanCounter.innerText = parseInt(spanCounter.innerText) + 1;
//  });

//  botonMenos.addEventListener("click", function (){
//     spanCounter.innerText = parseInt(spanCounter.innerText) - 1;
//  });


