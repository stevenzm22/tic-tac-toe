const cuadro = document.getElementsByClassName('cuadro')
const contenedorDeResultados=document.getElementById('"contenedorDeResultados')
const reiniciar= document.getElementById('reiniciar')


for (let index = 0; index < cuadro.length; index++) {

 // console.log(cuadro);
 
    cuadro[index].addEventListener("click", function () {

        if (cuadro[index].textContent != "") {
            console.log("holi");
            
        }

        cuadro[index].textContent="x"
        
      console.log("clic", (index + ""));

        //funcion para que la maquina juegue
        function rival() {

            let turno= Math.floor(Math.random() * cuadro.length)
            return turno
          
        }
            let aleatorio= rival()
             console.log(aleatorio);

             

             if ( cuadro[index]==="x") {
                
              console.log("click");
              
              
             } else { 
                 cuadro[index].textContent != ""
                cuadro[aleatorio].textContent="0"
          
            }
               
       
        
    })

    
}







