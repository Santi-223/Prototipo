//console.log("archivo vinculado");

const  idCompra = document.querySelector("[name=idCompra]");
const  nombreCompra = document.querySelector("[name=nombreCompra]");
//const  telefono = document.querySelector("[name=telefono]");
//const  direccion = document.querySelector("[name=direccion]");
const precioCompra = document.querySelector("[name=precioCompra]");
//const  password = document.querySelector("[name=password]");

const validateEmptyField = (message,e) =>{
  const field = e.target;
  const fieldValue = e.target.value;
  if(fieldValue.trim().length == 0){
     field.classList.add("invalid");
     field.nextElementSibling.classList.add ("error");
      field.nextElementSibling.innerText = message;
  }else{
   field.classList.remove("invalid");
   field.nextElementSibling.classList.remove("error");
   field.nextElementSibling.innerText = "";

}
}


// expresiones correo


const validateNombComFormat = e =>{
   const field = e.target;
   const fieldValue= e.target.value;
   const regex= new RegExp (/^[A-Za-z\s']+$/);
  
   if(fieldValue.trim().length >1 && !regex.test(fieldValue)){
     field.classList.add("invalid");
     field.nextElementSibling.classList.add ("error");
     field.nextElementSibling.innerText ="Ingrese un nombre valido.";
  
  }else{
     field.classList.remove("invalid");
     field.nextElementSibling.classList.remove("error");
     field.nextElementSibling.innerText = "";
   
  }
}


const validateIdCompraFormat = e =>{
   const field = e.target;
   const fieldValue= e.target.value;
   const regex= new RegExp (/^[0-9]+$/);
  
   if(fieldValue.trim().length >1 && !regex.test(fieldValue)){
     field.classList.add("invalid");
     field.nextElementSibling.classList.add ("error");
     field.nextElementSibling.innerText ="Ingrese solo números.";
  
  }else{
     field.classList.remove("invalid");
     field.nextElementSibling.classList.remove("error");
     field.nextElementSibling.innerText = "";
   
  }
}

const validaPrecioFormat = e =>{
   const field = e.target;
   const fieldValue= e.target.value;
   const regex= new RegExp (/^[0-9]+$/);
  
   if(fieldValue.trim().length >1 && !regex.test(fieldValue)){
     field.classList.add("invalid");
     field.nextElementSibling.classList.add ("error");
     field.nextElementSibling.innerText ="Ingrese solo números.";
  
  }else{
     field.classList.remove("invalid");
     field.nextElementSibling.classList.remove("error");
     field.nextElementSibling.innerText = "";
   
  }
}
idCompra.addEventListener("input",validateIdCompraFormat);
nombreCompra.addEventListener("input",validateNombComFormat);
precioCompra.addEventListener("input",validaPrecioFormat);
//direccion.addEventListener("input",validateDirecFormat);
//cedula.addEventListener("input",validaCedFormat);

