// 3. Realiza un script que pida cadenas de texto  hasta que se
//  pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas
//   las cadenas concatenadas con un guión -.


 //DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
 var resultado = "";
//BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
do {
    //PEDIMOS LA CADENA POR TECLADO
    var cadena = prompt("Introduce una cadena");
    //SI LA VARIABLE RESULTADO ESTÁ VACÍA
    if (resultado == "") {
        //CONCATENAMOS SIN UTILIZAR GUIÓN
        resultado = resultado + cadena;
    }
    //SINÓ
    else {
        //CONCATENAMOS CON GUIÓN
        resultado = resultado + "-" + cadena;
    }
    //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
} while (confirm("Desea seguir?"));
//SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO
console.log(resultado)