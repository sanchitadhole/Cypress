describe('validate Datepicker', () => {

    before(function() {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
    });

    it('validate Datepicker ', () => {

        cy.visit('https://paytm.com/bus-tickets')
        cy.Datepicker(0)

    })

    it('validate Datepicker return date ', () => {
        cy.visit('https://paytm.com/bus-tickets')
        cy.Datepicker(1)
    })
    
})