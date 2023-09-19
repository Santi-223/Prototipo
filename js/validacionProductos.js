function validacionprod(){
    let nombre= document.getElementById('nombreprod').value;
    let descripcion= document.getElementById('descprod').value;
    let precio= document.getElementById('precioprod').value;
    
    let caracteres = /^[a-zA-Z0-9_@.-ñÑ]+$/;
    

 if (nombre==="" || descripcion==="" || precio==="") {

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
 else if (nombre=="Zanahoria" || nombre=="Arroz" || nombre=="Aguacate" || nombre=="Salsa de tomate" || nombre=="Salsa rosada" || nombre=="Salsa BBQ" || nombre=="Pollo" || nombre=="Carne" || nombre=="Papa" || nombre=="Coca-cola"){

    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Este producto ya existe en el registro, por favor, ingrese uno diferente.',
        timer: 5000
        
    });

 } else {
    Swal.fire({
        icon: 'success',
        title: 'Producto registrado con éxito',
        text: '',
        timer: 3000
        
        
    }).then(() => {

        window.location.href = 'gestionProductos.html'; 
    });
    ;
 } 

}


function validacionacprod(){
    let nombreac= document.getElementById('nombreacprod').value;
    let direccionac= document.getElementById('descacprod').value;
    let telefonoac= document.getElementById('precioacprod').value;
    
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
        title: 'Producto actualizado con éxito',
        text: '',
        timer: 3000
        
        
    }).then(() => {

        window.location.href = 'gestionProductos.html'; 
    });
    ;
 } 

}

function cargarImagen(){
    let src = document.getElementById('imagen_insumo').value

    if (src === ""){
        src = "https://png.pngtree.com/png-clipart/20190705/original/pngtree-gallery-vector-icon-png-image_4279768.jpg"
    }

    document.getElementById('imagen_i').src = src
}