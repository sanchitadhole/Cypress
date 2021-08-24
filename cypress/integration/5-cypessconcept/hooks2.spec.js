describe('hooks', () => {
    before(() => {
        cy.log('before all')
    })

    beforeEach(() => {
        cy.log('after each testcase')

    })
    it('add two num', (() => {
        cy.log('testcase one')
        expect(2).to.eq(2)

    }))
    it('add two number', (() => {
        cy.log('testcase two')
        expect(10).to.eq(10)

    }))
    after(() => {
        cy.log('after all')
    })
})