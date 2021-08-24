describe('verify the login functionality', () => {

    it('verify login with valid credential', () => {
            cy.login('sanchitadhole27@gmail.com', 'sanchu05')
            cy.get('h4[class ="ant-typography"]').first().should('have.text', 'Create New Project')

        })
        // testcase 2
    it('login with invalid credential', function() {

        cy.login('sanchitadhole27@gmail.com', 'sanchu05')
        cy.url().should('have.include', 'login')


    })

})