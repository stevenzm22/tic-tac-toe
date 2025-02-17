const cuadro = document.getElementsByClassName('cuadro')
const contenedorDeResultados=document.getElementById('contenedorDeResultados')
const reiniciar= document.getElementById('reiniciar')

let listaVacia = [];
let listaOcupada = [];
let listaRestante = []



for (let index = 0; index < cuadro.length; index++) {

    listaVacia.push(index)

    cuadro[index].addEventListener("click", function () {

        if (cuadro[index].textContent !== "") {
            alert("esta lleno")
        }
       
       if (cuadro[index].textContent="x") {
            listaOcupada.push(index)
            listaRestante = listaVacia.filter(el => !listaOcupada.includes(el));
            rival()
        }
        
        

        //funcion para que la maquina juegue
        function rival() {

            let turno=listaRestante[Math.floor(Math.random() * listaRestante.length)]
           
            cuadro[turno].textContent= "0"
         }
         console.log(rival());
         
       // validacion de ganar 
                const ganar=[
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,4,8],
                    [2,4,6],
                    [0,3,6],
                    [2,5,8],
                    [1,4,7]
                ]

         for (let index = 0; index < ganar.length; index++) {

          const [a,b,c] = ganar[index]

          if (
            cuadro[a].textContent === "x" &&
            cuadro[b].textContent === "x" &&
            cuadro[c].textContent === "x"
        ) {
           alert("ganaste")
        } else if (
            cuadro[a].textContent === "0" &&
            cuadro[b].textContent === "0" &&
            cuadro[c].textContent === "0"
        ) {
           alert("perdiste")
        }



         } 
                
    }) 

}

reiniciar.addEventListener("click", function () {
    for (let index = 0; index < cuadro.length; index++) {
        cuadro[index].textContent = ""
    }
});





