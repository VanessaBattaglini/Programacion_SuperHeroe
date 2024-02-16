// let input = getElementById('busqueda');
// let boton = getElementById('boton');


// //Validación de texto numéricos

// function validar(numeros) {
//     let validacion = true;
    
// let validarNumeros = /^[0-9]+$/; 

//     document.querySelector("#busqueda").innerHTML = "";
//     if (expresion.test(input.value) == false) {
//     validacion = false;
//     alert("Debes ingresar un número");
//     }


//     return validacion;
// }
// boton.addEventListener('submit', function (e) {
//     e.preventDefault();
// })

$(document).ready(function(){
    $("#boton").click(function(){
        // Capturar el valor del campo de búsqueda
        let valorBusqueda = $("#busqueda").val();

        // Validar que solo ingrese números
        let validarNumeros = /^[0-9]+$/;
        if (!validarNumeros.test(valorBusqueda)) {
            alert("Debes ingresar sólo numeros");
            return;
        }
        if (valorBusqueda > 732) {
        alert('Debes ingresar un número menor a 732')
    }
    });
    
});
