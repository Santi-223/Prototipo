let url = 'https://api-luchosoft.onrender.com/api/clientes'


$(document).ready(function () {
    $(".toggle-icon").click(function () {
        var $toggleIcon = $(this);
        var currentState = $toggleIcon.attr("data-state");

        if (currentState === "on") {
            $toggleIcon.removeClass("bi-toggle2-on").addClass("bi-toggle2-off");
            $toggleIcon.attr("data-state", "off");
            $(this).toggleClass("gris");
        } else {
            $toggleIcon.removeClass("bi-toggle2-off").addClass("bi-toggle2-on");
            $toggleIcon.attr("data-state", "on");
            $(this).toggleClass("gris");
        }
    });

    $(".iClienteFrecuente").click(function () {
        $(this).toggleClass("fa-user-plus fa-user-minus");
        $(this).toggleClass("gris");
    });


});

const listarClientes = async (busqueda) => {
    let respuesta = ''
    let body = document.getElementById('contenidoClientes')

     // Si se proporciona un parámetro de búsqueda, construye la URL de la API con ese parámetro
     let urlAPI = url;
    if (busqueda) {
        alert(busqueda)
        urlAPI += `?_id=${encodeURIComponent(busqueda)}`;
    }

    //url: Es la url de la api.
    //Al deslpegarla en el servidor colocar la api del servidor
    fetch(urlAPI, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(function (data) {
            let listaClientes = data.cliente //Capturar el array devuelto por la api

            // Limpia la tabla antes de agregar datos nuevos
            table.clear().draw();

            console.log(listaClientes)
            datos =
                listaClientes.map(function (cliente) {//Recorrer el array
                    let estado = ""
                    let frecuente = ""
                    if (cliente.estado_cliente==false) {
                        estado = "bi bi-toggle2-off iconos toggle-icon gris"
                    }else{
                        estado = "bi bi-toggle2-on iconos toggle-icon"
                    }
                    if (cliente.cliente_frecuente==true) {
                        frecuente = "fa-solid fa-user-plus iconosRojos"
                    }else{
                        frecuente = "fa-solid fa-user-minus gris"
                    }
                    respuesta += `<tr><td>${cliente._id}</td>` +
                        `<td>${cliente.nombre_cliente}</td>` +
                        `<td>${cliente.telefono_cliente}</td>` +
                        `<td>${cliente.direccion_cliente}</td>` +
                        `<td>
                            <i onclick="window.location.href='ModificarCLiente.html?_id=${cliente._id}'" class="fa-solid fa-pen-to-square iconosRojos"></i>
                            <i onclick="cambiarEstado()" class="${estado}"></i>
                            <i class="${frecuente}"></i>
                        </td>`+
                        `</tr>`
                })
            // Agrega los datos a la tabla y redibuja la tabla
            table.rows.add($(respuesta)).draw();
        })
}

const registrarCliente = async()=>{
    let _nombre = document.getElementById('nombre_cliente').value
    let _telefono = document.getElementById('telefono_cliente').value
    let _direccion = document.getElementById('direccion_cliente').value
    
    let cliente = {
        nombre_cliente:_nombre,
        telefono_cliente: _telefono,
        direccion_cliente: _direccion
    }

    fetch(url,  {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(cliente),//Convertir el objeto _usuario  a un JSON
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
    .then(json => {
        //alert(json.msg)//Mensaje que retorna la API
        console.log(json)
        if(json.msg){
            Swal.fire(
                json.msg,
                '',
                'success'
            )
        }
    })
}

// En clienteFunciones.js

function consultarClientes(busqueda) {
    let urlAPI = url;
    // Si se proporciona un parámetro de búsqueda, construye la URL de la API con ese parámetro
    if (busqueda) {
      urlAPI += `?_id=${encodeURIComponent(busqueda)}`;
    }

    fetch(urlAPI, {
      method: 'GET',
      mode: 'cors',
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then((resp) => resp.json())
    .then(function (data) {
      let cliente = data.cliente[0]; // Suponiendo que obtienes un solo cliente
      
      // Llenar los campos del formulario con los datos del cliente
      document.getElementById('_id').value = cliente._id;
      document.getElementById('nombre_cliente').value = cliente.nombre_cliente;
      document.getElementById('telefono_cliente').value = cliente.telefono_cliente;
      document.getElementById('direccion_cliente').value = cliente.direccion_cliente;
    })
    .catch(function (error) {
      console.error('Error al obtener los detalles del cliente:', error);
    });
  }
  
  
