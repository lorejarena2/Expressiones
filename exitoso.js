const general=document.querySelector('.contenedor')
let variable=localStorage.getItem('key')
let apellido=localStorage.getItem('key2')
console.log(variable)
console.log(apellido)
const value=document.createElement('div')
value.className="mostrar"
value.textContent=variable+' '+apellido
general.append(value)
function redirigir(){
location.href="/index.html"
}

 setTimeout(redirigir,3000)