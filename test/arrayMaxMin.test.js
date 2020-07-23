const {arrayMaxMin} = require("../lib/arrayMaxMin.js") 

function checkErrorCases(array1,array2,errorMsg){
    expect(()=>{
        arrayMaxMin(array1,array2)
    }).toThrow(errorMsg)
}
describe("arrayMaxMin function ",()=>{
    const a = [3,10,5]
    const b = [20,7,15,8]
    const c = null
    const d = []
    it("works for simple case",()=>{
        const resultado = arrayMaxMin(b,a)
        expect(resultado).toEqual({max:17,min:2})
    })
    it("throws error for null array",()=>{
        checkErrorCases(a,c,"Input arrays cannot be null")
    })
    it("throws error for empty array",()=>{
        checkErrorCases(d,b,"Input arrays cannot be empty")
    })
})