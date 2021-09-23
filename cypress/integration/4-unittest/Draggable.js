describe('action class', () => {
    it('scrollview', () => {
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress#Cypress-in-the-Real-World')
        cy.get('.bg-white.clear-both').scrollIntoView()

    })
    it('scrollview', () => {
        cy.visit('https://www.google.com/search?q=gmail&rlz=1C1CHBF_enIN885IN885&oq=gmai&aqs=chrome.0.35i39j69i57j0i131i433i512j0i433i512l2j69i61l2j69i65.2183j0j7&sourceid=chrome&ie=UTF-8')
        cy.get('.Q8LRLc').last().scrollIntoView()
        cy.get('.Q8LRLc').last().should('have.text', 'India')
    })
    // it.only('scroll1', () => {
    //     cy.visit('https://formvalidation.io/guide/examples/changing-success-and-error-colors/')
    //     cy.get('.ba.b--black-20.bg-blue.white.ph3.pv2.br2').scrollIntoView()
    // })
    it('drag and drop', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('#droppable>p').then((el) => {
            expect(el).to.have.css('background-color', 'rgb(244, 89, 80)')

        })

    })
    it('double click', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.attr', 'class', 'div-double-click double')



    })

    describe('validate scrollIntoView', () => {
        it("scroll into view", () => {
            cy.visit('http://www.webdriveruniversity.com/')
            cy.get('#dropdown-checkboxes-radiobuttons > div > div.section-title').scrollIntoView()

        })



    })
})