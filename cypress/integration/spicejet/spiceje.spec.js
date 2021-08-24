describe('verify the checkbox functionality with check', () => {
    it('validate the checkbox functionality with check', () => {
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip_1').click()
        cy.get("label[for='ctl00_mainContent_rbtnl_Trip_1']").should("have.class", "select-label")
    })

    it('varify the checkbox functionality with uncheck', () => {
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip_0').click()
        cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should('not.have.class', 'select-label')
    })

    it('verify the second check box with check ', () => {
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip_0').click()
        cy.get("label[for='ctl00_mainContent_rbtnl_Trip_0']").should("have.class", "select-label")
    })
    it('verify the second checkbox functionality with uncheck', () => {
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip_1')
        cy.get("label[for='ctl00_mainContent_rbtnl_Trip_0']").should("have.class", "select-label")

    })




})