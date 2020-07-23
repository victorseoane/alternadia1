function findNextDistinctValue(array,index){
    for(let k=index+1;k<array.length;k++){
        if(array[k]!=array[index]){
            return k;
        }
    }
    return -1;
}

function arrayFindPeaks(array){
    if(array==null){
        throw Error("Input array cannot be null")
    }
    if(array.length==0){
        throw Error("Input array cannot be empty")
    }
    if(array.length<=2){
        return {index:[],values:[]}
    }

    indexArray=[]
    valuesArray=[]

    let i=1;
    while(i<array.length-1){
        let aux = findNextDistinctValue(array,i)
        if(aux==-1){ //El valor se mantiene hasta el final -> no es pico
            break;
        } else{
            if((array[i]>array[i-1])&&(array[i]>array[aux])){
                indexArray.push(i)
                valuesArray.push(array[i])
            }
            i=aux
        }
    }
    return {index:indexArray,values:valuesArray}
}

module.exports={arrayFindPeaks}