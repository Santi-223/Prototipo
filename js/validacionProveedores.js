function validacionpro(){
    let nombre= document.getElementById('nombrepro').value;
    let direccion= document.getElementById('dirpro').value;
    let telefono= document.getElementById('telepro').value;
    
    let caracteres = /^[a-zA-Z0-9_@.-ñÑ]+$/;
    

 if (nombre==="" || direccion==="" || telefono==="") {

    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos.',
        timer: 3000
    });

    
 } 
 else if (!caracteres.test(nombre)){

    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingrese caracteres válidos.',
        timer: 3000
        
    });

 }
 else if (nombre=="Cachuchax" || nombre=="Donde el cucho" || nombre=="Serresiete" || nombre=="LeidyLegumbres" || nombre=="MariaVerde" || nombre=="ArleyKnives" || nombre=="JuandaTech" || nombre=="Julicerámicas" || nombre=="RatiStunner" || nombre=="Ohiggins"){

    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Este proveedor ya existe en el registro, por favor, ingrese uno diferente.',
        timer: 5000
        
    });

 } else {
    Swal.fire({
        icon: 'success',
        title: 'Proveedor registrado con éxito',
        text: '',
        timer: 3000
        
        
    }).then(() => {

        window.location.href = 'gestionProveedores.html'; 
    });
    ;
 } 

}


function validacionacpro(){
    let nombreac= document.getElementById('nombreacpro').value;
    let direccionac= document.getElementById('diracpro').value;
    let telefonoac= document.getElementById('teleacpro').value;
    
    let caracteres = /^[a-zA-Z0-9_@.-ñÑ]+$/;
    

 if (nombreac==="" || direccionac==="" || telefonoac==="") {

    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, complete todos los campos.',
        timer: 3000
    });

    
 } 
 else if (!caracteres.test(nombreac)){

    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingrese caracteres válidos.',
        timer: 3000
        
    });

 }
 else {
    Swal.fire({
        icon: 'success',
        title: 'Proveedor actualizado con éxito',
        text: '',
        timer: 3000
        
        
    }).then(() => {

        window.location.href = 'gestionProveedores.html'; 
    });
    ;
 } 

}