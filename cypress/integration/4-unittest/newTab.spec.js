describe('Open NewTab testcases', () => {

    let hvalu = 'https://www.google.com/'


    it('remove attribute', () => {
        cy.visit('/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.url().should('have.include', 'Contact-Us')
        cy.title().should('have.include', 'WebDriver | Contact Us')

    })

    it('remove attribute', () => {
        cy.visit('/')
        cy.get('#contact-us').invoke('attr', 'href').then(function(el) {

            cy.log(el)
            cy.visit(`/${el}`)


        })


    })

    it('remove attribute', () => {
        cy.visit('/')
        cy.get('#contact-us').then(function($el) {
            $el.setAttribute('target', '_self')
        }).should('have.attr', 'target', '_self')
        cy.get('#contact-us').click()
    })





    it('remove attribute', () => {
        cy.visit('/')
        cy.get('#contact-us').then(function($el) {

            $el.setAttribute('herf', 'https://www.google.com/')
        })
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('#contact-us').invoke('removeAttr', 'href').then(function(el) {
            expect(el).to.equal(hvalu)
        })



    })

    it('remove attribute', () => {
        cy.visit(hvalu)




    })


})