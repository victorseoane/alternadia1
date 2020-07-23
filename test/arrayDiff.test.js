const {arrayDiff} = require("../lib/arrayDiff.js") //Ruta al fichero a importar

//test("Test that the difference between [1,2,3,4] and [1,2] is [3,4]", test1)
function computeAndAssert(a,b,expected){
    const result = arrayDiff(a,b)
    expect(result).toEqual(expected)
}
describe("arrayDiff function ",()=>{
    const a = [1,2,3,4]
    const b = [1,2]
    const c = null
    const d = []
    it("works for simple case",()=>{
        computeAndAssert(a,b,[3,4])
    })
    it("works for inverse case",()=>{
        computeAndAssert(b,a,[3,4])
    })
    it("throws error for null array",()=>{
        expect(()=>{
            arrayDiff(c,b)
        }).toThrow("Bad params")
    })
    it("works for empty array",()=>{
        computeAndAssert(d,b,b)
    })
})