describe('varify iframe with cypress', () => {

    it('iframe', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(($str) => {
            const body = $str.contents().find('body')
            cy.wrap(body).as('iframeTest')
        })
        cy.get('@iframeTest').find('#button-find-out-more').should('have.text', 'Find Out More!')
    })


    it('iframe', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').within(($str) => {
            const body = $str.contents().find('body')
            cy.wrap(body).as('iframeTest')
        })
        cy.get('@iframeTest').find('#button-find-out-more').should('have.text', 'Find Out More!')
    })

})