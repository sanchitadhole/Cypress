///<reference types = "cypress" />



// scenario
describe('verify the login functionality', () => {
    // testcase 1
    it('verify login with valid credential', () => {
            cy.visit('https://app.recast.studio/auth/login/?next=/')
                // cy.get('#login-form_email').type('sanchitadhole27@gmail.com')
                // cy.get('input[placeholder ="Email"]').type('sanchitadhole27@gmail.com')

            cy.fixture("example.json").then((data) => {

                cy.get('input[placeholder ="Email"]').type(data.email)
                cy.get('input[type = "password"]').type(data.password)
            })

            // cy.get('#login-form_password').type('sanchu05')
            // cy.get('input[type = "password"]').type('sanchu05')

            // cy.get('.ant-btn').click()

            cy.get('button[type = "submit"]').click()
            cy.wait(10000)
            cy.get('h4[class ="ant-typography"]').first().should('have.text', 'Create New Project')

        })
        // testcase 2
    it('login with invalid credential', function() {

        cy.visit('https://app.recast.studio/auth/login/?next=/?next=/')
        cy.get('input[placeholder="Email"]').type('sanchitadhole27@gmail.com')
        cy.get('input[type="password"]').type('sanchita12')
        cy.get('button[type= "submit"]').click()
        cy.url().should('have.include', 'login')

    })

    
})