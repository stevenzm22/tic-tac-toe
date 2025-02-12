const cuadro = document.getElementsByClassName('cuadro')
const contenedorDeResultados=document.getElementById('"contenedorDeResultados')
const reiniciar= document.getElementById('reiniciar')

for (let index = 0; index < cuadro.length; index++) {

    
 // console.log(cuadro);
 
    cuadro[index].addEventListener("click", function () {

        cuadro[index].textContent="x"
        
      console.log("clic", (index + ""));

    function rival() {
        let turno= cuadro[index].textContent
        turno=Math.floor(Math.random() * cuadro[index])
        
        turno.textContent="0"
        console.log(turno);
        
    }
      rival()
    })

}







