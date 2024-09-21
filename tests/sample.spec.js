const {test,expect}=require('@playwright/test')

test("My first Test ",async function({page}){

    expect(12).toBe(12)
})


test.skip("My second Test ",async function({page}){
    
    expect(100).toBe(102)
})


test("My third Test ",async function({page}){

    expect(1.2).toBe(1.2)
})

test("My forth Test ",async function({page}){

    expect(false).toBeFalsy
})