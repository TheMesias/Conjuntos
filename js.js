function main () {
    let conjuntoA = new Set(); 
    let conjuntoB = new Set();
    
    let n = prompt("Ingrese cuantos valores va a ingresar en conjunto A");

    if(n <= 0){
        alert("Ingrese un numero valido!"); 
    }else{
        for(let i=0; i<n;i++){
            conjuntoA.add(prompt("Ingrese el valor: ")); 
        }
    }
    
    n = prompt("Ingrese cuantos valores va a ingresar en conjunto B");
    
    if(n <= 0){
        alert("Ingrese un numero valido!"); 
    }else{
        for(let i=0; i<n;i++){
            conjuntoB.add(prompt("Ingrese el valor: ")); 
        }
    }
 
    creacionConjuntos(conjuntoA, conjuntoB); 
};

function creacionConjuntos (conjuntoA, conjuntoB) {
    let unionI, interseccionI, sumaI, diferenciaI; 
    unionI = union(conjuntoA,conjuntoB);  
    interseccionI = interseccion(conjuntoA,conjuntoB);
    sumaI = suma(conjuntoA,conjuntoB);
    diferenciaI = diferencia(conjuntoA,conjuntoB);  
    Imprimir(unionI,interseccionI,sumaI, diferenciaI); 
};

function union (conjuntoA,conjuntoB) {
    const union = new Set(); 
    let cA = conjuntoA.values(); 
    let cB = conjuntoB.values(); 
    
    let n = conjuntoA.size; 
    for(let i=0; i<n; i++){
        let numero = cA.next().value; 
        union.add(numero); 
    }

    n = conjuntoB.size; 
    for(let i=0; i<n; i++){
        let numero = cB.next().value; 
        union.add(numero); 
    }

    return union;
};

const interseccion = (conjuntoA,conjuntoB) => {
    let interseccion = [...conjuntoA].filter(e => {
        return conjuntoB.has(e)
    });
    return interseccion;
};

const suma = (conjuntoA,conjuntoB) => {
    const arrayA = Array.from(conjuntoA); 
    const arrayB = Array.from(conjuntoB); 
    let arrayT = []; 
    for(let i=0; i<arrayA.length; i++){
        arrayT.push(arrayA[i]); 
    }

    for(let i=0; i<arrayB.length; i++){
        arrayT.push(arrayB[i]); 
    }

    return arrayT; 
}

const diferencia = (conjuntoA,conjuntoB) => {
    let diferencia = new Set([...conjuntoA].filter(x => !conjuntoB.has(x)));
    diferencia = new Set([...conjuntoB].filter(c => !conjuntoA.has(c))); 
    return diferencia
}

const Imprimir = (union,interseccion,suma, diferencia) => {
    console.log("UNION: ", union);
    console.log("Interseccion", interseccion);
    console.log("Suma: ",suma); 
    console.log("Diferencia: ", diferencia);   
}



main(); 

