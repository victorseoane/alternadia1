const {arrayFindPeaks} = require("../lib/arrayPeaks.js") 

function checkErrorCases(array,errorMsg){
    expect(()=>{
        arrayFindPeaks(array)
    }).toThrow(errorMsg)
}

function checkCase(array,expected){
    const resultado = arrayFindPeaks(array)
    expect(resultado).toEqual(expected)
}

describe("arrayFindPeaks function ",()=>{
    const testArrays=[
        null,
        [],
        [1,4],
        [1],
        [0,1,2,5,1,0,3,2],
        [1,2,2,2,1],
        [1,1,2,3,1,4,0,1],
        [0,1,2,2,2,3,0,1],
        [2,3,4,4,4,4,7,3,3,3,6,2],
        [3,3,4,4,6,6,6,1,0]
    ]
    const results = [
        null,
        null,
        {index:[],values:[]},
        {index:[],values:[]},
        {index:[3,6],values:[5,3]},
        {index:[1],values:[2]},
        {index:[3,5],values:[3,4]},
        {index:[5],values:[3]},
        {index:[6,10],values:[7,6]},
        {index:[4],values:[6]} //Hay error en el enunciado
    ]

    it("throws error for null array",()=>{
        checkErrorCases(testArrays[0],"Input array cannot be null")
    })
    it("throws error for empty array",()=>{
        checkErrorCases(testArrays[1],"Input array cannot be empty")
    })
    for(let i=2;i<testArrays.length;i++){
        it("works for case "+i,()=>{
            checkCase(testArrays[i],results[i])
        })
    }


})