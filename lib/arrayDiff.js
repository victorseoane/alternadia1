function inArray(needle,haystack){
    let found = false
    for(let j=0;j<haystack.length;j++){
        if(needle==haystack[j]){
            found=true
            break
        }
    }
    return found
}

function orderedArrayDiff(array1,array2){
    const resultado = []
    for(let i=0;i<array1.length;i++){
        const found = inArray(array1[i],array2)
        if(found===false){ //Tres iguales comprueba el tipo
            resultado.push(array1[i])
        }
    }
    return resultado
}

function arrayDiff(array1,array2){
    if((array1==null)||(array2==null)){
        throw Error("Bad params")
    }

    const resultado = [...orderedArrayDiff(array1,array2),...orderedArrayDiff(array2,array1)]
    return resultado
}

module.exports={arrayDiff,orderedArrayDiff} //Si quiero exportar mas funciones, se pueden agrupar en un objeto
//No hace falta poner key, la pone por defecto al mismo nombre