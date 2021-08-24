describe('document level validation', () => {
    it('validate the url1', () => {
        cy.visit('https://app.recast.studio/auth/login/')
        cy.url().should('contain', 'login')
    })
    it('validate the url2', () => {
        cy.visit('https://app.recast.studio/auth/register/')
        cy.contains('Sign Up').click().url().should('contain', 'register')
    })
    it('validate the url3', () => {
        cy.visit('https://recast.studio/pricing/')
        cy.contains('Pricing').click().url().should('contain', 'pricing')
    })
    it('validate the url4', () => {
        cy.visit('https://recast.studio/blog/')
        cy.contains('Blog').click().url().should('contain', 'blog')
    })
    it('validating thr title for a page', () => {
        cy.visit('https://app.recast.studio/auth/login/?next=/')
        cy.title().should('contain', 'Login - Recast Studio')
    })
    it('validate the title 2', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.title().should('contain', 'WebDriver | Data Tables')
    })
    it.only('validate the property of head section', () => {

        cy.visit('https://app.recast.studio/auth/login/?next=/')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

    })

})