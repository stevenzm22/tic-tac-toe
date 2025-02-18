const cuadro = document.getElementsByClassName('cuadro')
const contenedorDeResultados=document.getElementById('contenedorDeResultados')
const reiniciar= document.getElementById('reiniciar')

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
    let player1 = true;

  for (let index = 0; index < cuadro.length; index++) {
   
    cuadro[index].addEventListener("click", function () {
        
        if (cuadro[index].textContent !== "") {
            alert("esta lleno")
        }
        if (player1 === true) {
            cuadro[index].textContent = "x"
            player1 = false;
       
        } else {
            cuadro[index].textContent = "0"
            player1 = true;
        }

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

