
texto = () =>{
    document.getElementById("text").innerHTML= "Un texto"
}

let lista = document.getElementById('lista')
const arrayElement = ['primero','segundo','tercero','cuarto']

arrayElement.forEach(item =>{
    lista.innerHTML +=`<li>${item} </li>`
})

let li = document.getElementById("otro")

li.innerHTML = `<li>California</li>
<li>LOS ANGELES </li>`