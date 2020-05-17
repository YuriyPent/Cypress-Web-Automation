/// <reference types = "cypress" />

describe('Saving subject of the command', () => {

    it('then and wrap methods', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        
        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(emailLabelSecond).to.equal('Email address')
                expect(passwordLabelSecond).to.equal('Password')
                expect(passwordLabelFirst).to.equal(passwordLabelSecond)
            })
        })
    })
})