const parrafosobremi = document.querySelector("#e1");

const arraypsobremi = ['']

const template = document.querySelector("#template-p").content;

const fragment = document.createDocumentFragment();

const btnEdit = document.getElementById('btnEdit')

btnEdit.addEventListener('click', (e)=>{

arraypsobremi.forEach(datos =>{
    template.querySelector(".datosp").textContent = datos

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

parrafosobremi.appendChild(fragment)
e.stopPropagation})

const btnBorrar1 = document.getElementById("btnBorrar1")

btnBorrar1.addEventListener("click", ()=>{
    document.getElementsByClassName("comentario")[0].value = '';
})