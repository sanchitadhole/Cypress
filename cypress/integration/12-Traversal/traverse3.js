describe('all traversing method', () => {
    it('children', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html#')
        cy.wait(2000)
        cy.get('.breadcrumb.traversal-breadcrumb').children('.breadcrumb-item.active').should('have.text', 'Contact Us')

    })

    it('parent', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html#')
        cy.get('.breadcrumb-item.active').parent().should('have.class', 'breadcrumb traversal-breadcrumb')
    })

    it('traverse method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-arrows').children().find('a').eq(0).should('have.text', 'Women')
    })

    it('traverse method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-arrows').children().find('a').eq(1).should('have.text', 'Tops')
    })


})