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
    for (let i = 0; i <=9; i++) {
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
//     }
let count = 0;
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
             bolsitoContador.innerText= count;
        } else {
            count++;
            arrayProductos[index].cantidad++;
            bolsitoContador.innerText = count;
        }

        console.log(arrayProductos);
        console.log(bolsitoContador);

        localStorage.setItem("productosAgregados", JSON.stringify(arrayProductos));
      

         
    });
    
});

if(count > 0){
    bolsitoContador.visibility = "visible";
   
}else{
    bolsitoContador.visibility = "hidden";
}



//incrementamos de uno en uno y decrementamos de uno en uno.*/

// const spanCounter = document.getElementById("counter");
// const div = document.getElementById("counter-btns");
// const botonMas = div.firstElementChild;
// const botonMenos = div.lastElementChild;

// botonMas.addEventListener("click", function (){
//     spanCounter.innerText = parseInt(spanCounter.innerText) + 1;
//  });

//  botonMenos.addEventListener("click", function (){
//     spanCounter.innerText = parseInt(spanCounter.innerText) - 1;
//  });

/*3 desaparecemos y aparecemos el texto*/
// const parrafo = document.querySelector("#ejercicio-3 > p");
// const botonDelete = document.querySelector("#ejercicio-3 > button")

// botonDelete.addEventListener("click", function () {
//     if (parrafo.style.visibility !== "hidden") {
//         parrafo.style.visibility = "hidden";
//     } else { 
//         parrafo.style.visibility = "visible"
//     }
// });



