//objetos
const fideo ={
    nombre : 'fideo',
    precio : 140,
    id : 1232
}

const queso ={
    nombre : 'Queso',
    precio : 300,
    id: 1433
}

//crear Array
const prod = [fideo,queso]

//mostrar por consola que tiene el Array
console.log(prod)

//modificar el nombre del producto desde la consola
//fideo.nombre = 'Spaghetti';
//if (fideo.nombre !='fideo') {
  //  console.log ('se ha modificado el nombre por ' + prod[0].nombre);
    //console.log('El nuevo nombre ahora es ' + fideo.nombre);
//}

//interacción con el usuario
alert(`Productos : ${prod[0].nombre}, ${prod[1].nombre}`)

//Añadir un elemento
prompt1 = prompt(`Añade un  nuevo producto : ${prod[0].nombre}, ${prod[1].nombre}...`);

let nuevo = prod.push(prompt1);

//Lista con nuevo elemento
alert(`Lista actualizada : ${prod[0].nombre}, ${prod[1].nombre}, ${prompt1} . Total= ${nuevo}`);


//Eliminar el ultimo producto agregado
    let mensaje;
    let respuesta = prompt(`Si desea eliminar ${prompt1} de la lista, escriba SI o CONFIRMAR, sino PRESIONE CANCELAR`)
if(respuesta == null || respuesta == "" ) {
    respuesta = alert ('La lista no fue modificada')
} else {
    respuesta = alert(`${prompt1} ha sido eliminado de la lista`)
}

//usuario elije modificar el nombre

    let mjs;
    let resp = prompt(`Si desea cambiar el nombre ${prod[0].nombre} de la lista, escriba SI o CONFIRMAR, sino PRESIONE CANCELAR`)
if(resp == null || resp == "" ) {
    resp1 = prompt (`El nombre no fue modificado, ¿Desea modificar el nombre ${prod[1].nombre}?`);
    }else {
        resp2 = prompt(`Ingrese el nuevo nombre`);
        resp5 =alert(`Los nuevos productos son ${resp2} y ${prod[1].nombre}`)
    }
if(resp1 == null || resp1 == "" ) {
    resp3 = alert (`El nombre no fue modificado`)
}else{
    resp3 = prompt(`Ingrese el nuevo nombre`);
    resp4 = alert(`Los nuevos productos son ${resp3} y ${prod[0].nombre}`) 
}

