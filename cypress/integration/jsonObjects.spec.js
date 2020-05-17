/// <reference types="cypress" />

describe('JSON objects', () => {

    it('JSON objects', () => {

        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2" }
        const simpleArrayOfvalues = ["one", "two", "three"]
        const arrayOfObject = [{ "key": "value" }, { "key2": "value2" }, { "key3": "value3" }]
        const typesOfData = { "string": "this is a string", "number": 10 }

        const mix = {
            "FirstName": "Test",
            "LastName": "Tester",
            "Age": 35,
            "Students": [
                {
                    "firstName": "Sara",
                    "lastName": "Conor"
                },
                {
                    "firstName": "Bruce",
                    "lastName": "Willis"
                }
            ]
        }

        console.log(simpleObject.key2)
        console.log(simpleObject["key2"])
        console.log(simpleArrayOfvalues[1])
        console.log(arrayOfObject[2].key3)
        console.log(mix.Students[1].firstName)
    })
})