// const letras=/([A-Za-z ])\w/gi
// const numero=/[0-9 ]/gi
// let nombre="Luis orejarena"

// if(numero.test(nombre)){
//     console.log('Tiene numeros')
// }else{
//     console.log('Tiene letras')
// }

// const patron=/3\d{9}$/gi
// let probar=3163461887
// if(patron.test(probar)){
//     console.log(probar)
// }

const registrar=document.getElementById('registrar')
var correo="lorejarena2hotmail"
var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const validLetras=/([a-zA-Z]+\D$)/gi;
const ValidTelefono=/3\d{9}$/gi;
const ValidFecha=/^(0?[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{4})$/gi;



registrar.addEventListener('click',(e)=>{
    e.preventDefault()

     if(validLetras.test(nombre.value) && validLetras.test(apellido.value) && ValidTelefono.test(telefono.value)
      && validEmail.test(email.value) && (contra.value=newco.value) && ValidFecha.test(fecha.value) ){
        localStorage.setItem('key',nombre.value)
        console.log(nombre.value)
        localStorage.setItem('key2',apellido.value)
        nombre.value=""
        apellido.value=""
        telefono.value=""
        email.value=""
        contra.value=""
        newco.value=""
        fecha.value=""
        location.href="./exitoso.html"
         
     }else{
         console.log('Error en la validacion')
     }

})



// registrar.addEventListener('click',(e)=>{
//     e.preventDefault()

//      if(validLetras.test(nombre.value)){
//          console.log('Nombre valido')
//      }else{
//          console.log('Nombre invalido')
//      }
//      if(validLetras.test(apellido.value)){
//         console.log('Apellido valido')
//      }else{
//         console.log('Apellido invalido')
//      }

//      if(ValidTelefono.test(telefono.value)){
//          console.log('Telefono valido')
//      }else{
//          console.log('Telefono invalido')
//      }

//      if(validEmail.test(email.value)){
//          console.log('Correo valido')
//      }else{
//          console.log('Correo invalido')
//      }

//      if(contra.value = newco.value){
//          console.log('Las contraseñas coinciden')
//      }else{
//          console.log('Las contraseñas no coinciden')
//      }

//     if(ValidFecha.test(fecha.value)){
//         console.log('Fecha correcta')
//     }else{
//         console.log('Fecha incorrecta')
//     }

// })
