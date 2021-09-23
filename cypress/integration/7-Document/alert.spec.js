describe('validate alert', () => {

    it('validate alert', () => {
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.window().then((el) => {
            let foo = el.alert()
            cy.log(foo)
        })

    })

    it('validate the alert and confirm when true', () => {
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')

    })
    it('validate the alert and confirm when false', () => {
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false
        })

        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')

    })

    it.only('validate the alert and confirm when false', () => {
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button2').click()
        cy.get('#myModal').should('have.class', 'modal fade')
        cy.get('.modal-title').should('have.text', 'It’s that Easy!!  Well I think it is.....')
        cy.get("button[data-dismiss='modal']").first().click()
        cy.get('#myModal').should('not.have.class', 'in')

    })



})