describe('validate the window based element', () => {
    it('validate title', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.title().should('eq', 'Ethernet Devices - PLC Tools')
        cy.log(cy.title())
        expect(cy.title().chainerId).to.includes('chainer')

        // regular expression



    })

    it('validate the reload ', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.title().should('eq', 'Ethernet Devices - PLC Tools')
        cy.reload()

    })

    it('validate the reload ', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.contains('Analog Simulators').click({ force: true })

    })

    it('validate the reload ', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.contains(/^Analog Simulators$/).click({ force: true })
        cy.url().should('contains', 'analog')
        cy.go('back')
        cy.go('forword')

    })

    it.only('validate the reload ', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.get("h1[class='page-heading']").should('have.text', 'Analog Simulators')
    })
})