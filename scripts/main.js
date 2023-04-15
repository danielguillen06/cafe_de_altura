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
/*TIENDA*/
const divProductos = document.querySelectorAll(".boxesPoductos > .coffe");
const arrayProductos = [];

// id de cada producto
const id = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i <= 9; i++) {
        result += chars[Math.floor(Math.random() * chars.length - 1)];
    }
    return result
};

//    const id = () => {
//         let id = arrayProductos.length
//         let result = " ";
//         for (let i = 0; i <= id; i++) {
//             result = id;
//         }
//         return result;
// }

// /*declaramos nuestra variable count */
let count = 0;
const bolsitoContador = document.querySelector(".headerLogo2 > .contador");
/*realizamos las acciones para nuestra tienda y contador */
divProductos.forEach(añadir => {
    const boton = añadir.lastElementChild;

    boton.addEventListener("click", (event) => {
        const infoProdcutos = event.target.parentNode.children;
        const index = arrayProductos.findIndex(e => e.name == infoProdcutos[1].innerText)
        const bolsitoContador = document.querySelector(".headerLogo2 > .contador");
        if (index == -1) {
            const objProductos = {
                name: infoProdcutos[1].innerText,
                cantidad: 1,
                image: infoProdcutos[0].src,
                precio: infoProdcutos[2].innerText,
                id: id(),
            };
            arrayProductos.push(objProductos);
            count++;
            bolsitoContador.innerText = count;
        } else {
            count++;
            arrayProductos[index].cantidad++;
            bolsitoContador.innerText = count;
        }

        
        console.log(bolsitoContador);
        localStorage.setItem("productosAgregados", JSON.stringify(arrayProductos));

        /* senetencia donde mostramos el contador en nuestro bolsito*/
        if (count !== 0) {
            bolsitoContador.style.visibility = "visible";
        }else{
            bolsitoContador.style.visibility = "hidden";
        }

    });
});





