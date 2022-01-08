describe('validate register functionalty', () => {

    let url = "http://localhost:3000/#/"
    let Email = generateEmail()
    let password = `abc123`
    let token = ""

    function generateEmail() {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (var ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }


    it('validate register ', () => {
        cy.visit(`${url}register`)
        cy.get('.close-dialog > .mat-button-wrapper > .mat-icon').click()
        cy.get('#emailControl').type(Email)
        cy.get('#passwordControl').type(password)
        cy.get('#repeatPasswordControl').type(password)
        cy.get('.mat-select-arrow-wrapper').click()
        cy.get('.mat-option-text').each((el) => {
            // cy.log(el.text())
            if (el.text().includes('Name of your favorite pet?')) {
                el.click()
            }
        })
        cy.get('#securityAnswerControl').type('Tison')
        cy.get('#registerButton').click()
        cy.url().should('have.include', 'login')

    })

    it('verify Ui less', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/rest/user/login",
            body: {
                "email": Email,
                "password": password
            }
        }).then((response) => {
            // cy.log(response)
            token = response.body.authentication.token
            window.localStorage.setItem('token', token)
            cy.get('.mat-focus-indicator.buttons.mat-button.mat-button-base.ng-star-inserted').click()
            cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted').should('be.visible')
            cy.get('#price').should('be.visible')
            cy.get('.logo').should('be.visible')
            cy.get('[aria-label="Open Sidenav"] > .mat-button-wrapper > .mat-icon').should('be.visible')
            cy.contains('Account').should('not.be.visible')



        })


    })



})