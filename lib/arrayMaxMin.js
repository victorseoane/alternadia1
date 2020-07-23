function arrayMaxMin(array1,array2){
    if((array1==null)||(array2==null)){
        throw Error("Input arrays cannot be null")
    }
    if((array1.length==0)||(array2.length==0)){
        throw Error("Input arrays cannot be empty")
    }
    let maxDif=Math.abs(array1[0]-array2[0])
    let minDif=Math.abs(array1[0]-array2[0])
    
    for(let i=0;i<array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(Math.abs(array1[i]-array2[j])>maxDif){
                maxDif=Math.abs(array1[i]-array2[j])
            }
            if(Math.abs(array1[i]-array2[j])<minDif){
                minDif=Math.abs(array1[i]-array2[j])
            }
        }
    }
    const resultado = {max:maxDif,min:minDif}
    return resultado
}

module.exports={arrayMaxMin}