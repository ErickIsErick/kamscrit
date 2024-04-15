$("#boton_matriz_agregar").click(function () {
         
    if("docentes" in localStorage){
         var matriznueva = localStorage.getItem('docentes');
          matriznueva = JSON.parse(matriznueva); 
         var elementos=matriznueva.length;
         matriznueva[elementos] = new Array(3);
         matriznueva[elementos][0] = parseInt(prompt('Ingresa el numero de cedula de la persona '));
         matriznueva[elementos][1] = prompt('Ingresa el  nombre de la persona ');
         matriznueva[elementos][2]= parseInt(prompt('Ingresa la  edad de la persona '));
         alert(" cedula: " +matriznueva[elementos][0]+"  \n nombre " +matriznueva[elementos][1]+"  \nedad " +matriznueva[elementos][2] );
         
         localStorage.setItem("docentes", JSON.stringify(matriznueva));
         alert("El registro fue agregado satisfactoriamente");
     } else {
         var matriznueva=new Array();
          matriznueva[0] = new Array(3);        
         matriznueva[0][0] = parseInt(prompt('Ingresa el numero de cedula de la persona '));
         matriznueva[0][1] = prompt('Ingresa el  nombre de la persona ');
         matriznueva[0][2]= parseInt(prompt('Ingresa la  edad de la persona '));
         alert(" cedula: " +matriznueva[0][0]+"  \n nombre " +matriznueva[0][1]+"  \nedad " +matriznueva[0][2] );
         
         localStorage.setItem("docentes", JSON.stringify(matriznueva)); 
         alert("El registro fue agregado satisfactoriamente");

     }
   
});


$("#boton_matriz_listar").click(function () {
  
    var matriznueva = localStorage.getItem('docentes');
// Se parsea para poder ser usado en js con JSON.parse :)
matriznueva = JSON.parse(matriznueva); 

alert("cantidad de datos " + matriznueva.length)
for (var i = 0; i < matriznueva.length; i++) {
 alert("cedula: " + matriznueva[i][0]+ "  \nNombre: " + matriznueva[i][1]+"  \nEdad: " + matriznueva[i][2]);
 
}
   

 
});




$("#boton_matriz_modificar").click(function () {
  
    var matriznueva = localStorage.getItem('docentes');
    matriznueva = JSON.parse(matriznueva);
// Se parsea para poder ser usado en js con JSON.parse :)
var ide_modificar = prompt("ingrese la identificacion a modificar"); 
var control=0;

for (var i = 0; i < matriznueva.length; i++) {
 if(matriznueva[i][0]==ide_modificar){
      matriznueva[i][0]=prompt("ingrese la nueva cedula");
      matriznueva[i][1]=prompt("ingrese el nuevo nombre");
      matriznueva[i][2]=prompt("ingrese la nueva edad");
      control=1;
     };
 
};

if (control==1){
 alert("los datos fueron modificados satisfactoriamente");
}else{
 alert("no fue encontrada la cedula");

}

   localStorage.setItem("docentes", JSON.stringify(matriznueva));      
});



$("#boton_matriz_eliminar").click(function () {
  
    var matriznueva = localStorage.getItem('docentes');
    matriznueva = JSON.parse(matriznueva);
     // Se parsea para poder ser usado en js con JSON.parse :)
     var ide_eliminar = prompt("ingrese la identificacion a eliminar"); 
     var control=0;
     var eliminados=0;
     
     for (var i = 0; i < matriznueva.length; i++) {
            
           if(matriznueva[i][0]==ide_eliminar){
             
              if (i==(matriznueva.length-1)){  
                matriznueva[i][0]="";
                matriznueva[i][1]="";
                matriznueva[i][2]="";
                control=1;
                eliminados=eliminados+1;
              }else{
                matriznueva[i][0]=matriznueva[i+1][0];
                matriznueva[i][1]=matriznueva[i+1][1];
                matriznueva[i][2]=matriznueva[i+1][2];
                control=1;
                eliminados=eliminados+1;
               }
           }
       
     };

     if (control==1){
       alert("los datos fueron eliminados satisfactoriamente y fueron "+eliminados);
       var nuevosdatos=matriznueva.length-eliminados;
       var matrizcopia=new Array(nuevosdatos);
       for (var i = 0; i < nuevosdatos; i++) {
          matrizcopia[i] = new Array(3);
          matrizcopia[i][0]=matriznueva[i][0];  
          matrizcopia[i][1]=matriznueva[i][1]; 
          matrizcopia[i][2]=matriznueva[i][2]; 
        }
        localStorage.setItem("docentes", JSON.stringify(matrizcopia));

     }else{
       alert("no fue encontrada la cedula");
       localStorage.setItem("docentes", JSON.stringify(matriznueva));
     }

           
 });


$("#boton_matriz_vaciar").click(function () {


   localStorage.removeitem(docentes);
   alert("lista vacia");

   
   
});