describe('tablesum', () => {
    it('tablesum', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.tablesum(1, 159)
        cy.tablesum(2, 163)
    })
})