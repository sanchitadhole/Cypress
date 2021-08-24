describe('variables in cypress', () => {
    it('my first variable test case', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
            // const mail = cy.get('#loginFrm_loginname')
            // mail.type('sanchitadhole27@gmail.com')
            // const pwd = cy.get('#loginFrm_password')
            // pwd.type('sanchu05')
            // this is not right way to right cypress

        // cy.get('#loginFrm_loginname').type('sanchitadhole27$@gmail.com')
        // cy.get('#loginFrm_password').type('sanchu')

        // cy.get('#loginFrm_password').as('sa')
        // cy.get('@sa').type('sanchu')

        // ekda change kel tr sagalikade hoil 

        // const a = cy.get('#maintext')
        // console.log(a.text)

        // wrong aahe

        // traverse method
        cy.get('.maintext').should('have.text', ' Account Login')

        cy.get('.maintext').then((el) => {
            console.log(el.text())
            expect(el.text()).to.eq(' Account Login')

            cy.get('#loginFrm_loginname').then((el) => {
                el.value = 'sanchit'
            })
        })

    })


})