let boton = document.getElementById('calcular') 
boton.addEventListener("click",function (){

   let peso1=document.getElementById('peso').value 
   let altura1=document.getElementById('altura').value 
   let resultado=document.getElementById('resultado')
   let resultado1= (peso1 / (altura1**2)).toFixed(2);

   
if (resultado1 > 18.5 && resultado1 <= 24.9) {
    alert('PESO NORMAL');
}else if(resultado1>=25 && resultado1<29.9){
    alert('SobrePeso');
}else if(resultado1>=30 && resultado1<34.9){
    alert('Obesidad');
}else if(resultado1>35){
    alert('SobrePeso');
}
resultado1.textContent = `${resultado}`;
  
resultado.value =`${resultado1}`;  
   

})

let boton1 = document.getElementById('reiniciar')
boton1.addEventListener("click", function () {

    document.getElementById('peso').value = ``
    document.getElementById('altura').value = ``
    document.getElementById('resultado').value  = ``



}) 