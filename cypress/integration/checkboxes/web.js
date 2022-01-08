describe('validate dropdown', () => {
    it('validate dropdown', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        cy.get('#dropdowm-menu-1').select('java')
        cy.get('#dropdowm-menu-1').should('have.value', 'java')
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-1').select('Python')
        cy.get('#dropdowm-menu-2').select('Eclipse')

    })

    it('validate checkbox', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').first().check()

    })

})