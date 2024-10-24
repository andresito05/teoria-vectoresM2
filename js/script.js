// comentario en lina 
/*
comentario en bloque
 */
// como se inicializa un vector 
//inicializar un vacio 
let vector = [];
//inicializar un vector con informacion 
let numeros = [9, 10, 22, 3, 4, 11, 50, 99];

let nombres = ["brandon","alexa","siri"]; 

let logicos = [true, false, true, true]; 

// como se muestra la informacion de un vector 

// mostrar todo el vector
console.log(numeros);
console.log(nombres);
console.log(logicos); 

// mostrar valor en especifico 
console.log(numeros[2]);
console.log(nombres[2]);
console.log(logicos[3]);

// como recorrer un vector 
for(let i = 0; i < numeros.length; i++) {console.log(numeros[i]); 

}
for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
for(let i = 0; i< logicos.length; i++) {
    console.log(logicos[i]); 
}
// como agregar un vector 
numeros.push(300,500,100); 
console.log(numeros);

nombres.push("laura", "martin");
console.log(nombres);

logicos.push(true, false);
console.log(logicos);

//pop elimina el ultimo dato introduccido 
numeros.pop(6);
console.log(numeros);

//splice(posicion_inicial,cantidad_de_datos_a_borrar)
numeros.splice(4,2);
console.log(numeros);