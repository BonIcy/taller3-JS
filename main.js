/* 1. Construir un objeto literal "campus" que gestione
la info(PROPIEDADES) de Campus, trainers, campers, niveles,
tecnologías, teams y roadMap
1.1. De campus administrar los datos de contacto de las sedes en
Bucaramanga, Bogotá, Medellín y México
1.2. De los trainers y campers, su nombre, sus teléfonos, teams
(horarios de las teams=> día, hora y salones (nro y piso), y el
email, y de los campers también horarios de inglés y ser.
1.3. De los campers, también gestionar su nivel actual, como su
barrio y medio de transporte
1.4. De los niveles, su pre requisito, a que tecnología pertenece, si
es electiva u obligatoria
1.5. De la roadmap , Nro de créditos, año, Nro de asignaturas 

2. Consultas: Usando Destructuring,
2.1 De los trainers, reportar si la asignatura (tecnología) es
remota o presencial y de los campers el nombre de salón.
2.2 El teléfono de la sede de Medellín y la dirección de la
sede de Bucaramanga
2.3 De la asignatura (tecnología) si tiene sandbox o no

3. Consultas: Usando sintaxis de punto.
3.1 Reportar, prerequisito de la asignatura (tecnología) y nro de
créditos del roadmap
3.2 Agregar mas objetos con mas objetos anidados de manera libre
(por lo menos 7)*/
let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioCamper = document.querySelector("#myFormularioCamper");
let myFormularioTrainer = document.querySelector("#myFormularioTrainer");
let campus = {};

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Camper: [], Trainer: []};
    listaSedes();
    listaSede1();
    myFormularioCampus.reset();
})

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}
let listaSede1 = ()=>{
    let opTrainer = document.querySelector("[name='sede1']");
    opTrainer.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opTrainer.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}


myFormularioCamper.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);
    myFormularioCamper.reset();
})

myFormularioTrainer.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede1 = data.sede1;
    delete data.sede1;
    campus[`${sede1}`]["Trainer"].unshift(data);
    console.log(campus);
    myFormularioTrainer.reset();
})
//destructuring (no me funciono aunque intente de varias maneras, nunca me leia solo lo que pedia, me votaba el array completa y me estresé)
/* let [asignatura, ...resto] = Trainer;
console.log(asignatura);
let  [ , , , salonn, ...restoo] = Camper;
console.log(salonn);
 */
//sintaxis de punto(esto tampoco lo entendi muy bien, ni el para que usarlo aqui)
/* console.log(campus.nombreSede.Camper.asignatura);
console.log(campus.nombreSede.Camper.roadMap); */