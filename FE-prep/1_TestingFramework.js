function describe(testSuiteName, func){
    console.log(`beginning test Suite ${testSuiteName}`)
    try{
        func()
        console.log(`successfully completed test suite ${testSuiteName}`)
    }
    catch(error){
        console.error(`failed running test suite ${testSuiteName} on test case ${error.testCaseName} with error message ${error.errorMessage}`)
    }
}

function it(testCaseName, func){
    console.log(`beginning test case ${testCaseName}`)
    try{
        func()
        console.log(`successfully completed test case ${testCaseName}`)
    }
    catch(errorMessage){
        throw {testCaseName, errorMessage}
    }
}

function expect(actual){
    return {
        toExist: function(){
            if(actual == null){
                throw `expected value to exist but got ${JSON.stringify(actual)}`
            }
        },
        toBe: function(expected){
            if(actual !== expected) throw `expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`
        },
        toBeType: function(expected){
            if(typeof actual !== expected) throw `expected ${JSON.stringify(actual)} to be of type ${expected} but got ${typeof actual}`
        }
    }
}

// Do not edit the lines below.
exports.describe = describe;
exports.it = it;
exports.expect = expect;