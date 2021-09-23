describe('intercept with network', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it.only('varify the first request', () => {

        cy.intercept({
            method: 'GET',
            url: '**/comments/*',

        }).as('GetComment');

        cy.get('.network-btn').eq(0).click()
        cy.wait('@GetComment').should(({ request, response }) => {


            cy.log(request)

            cy.log(response)

            expect(response.statusCode).to.eq(200)

            expect(response.body).contains({
                'email': "Eliseo@gardner.biz"
            })




        })





    })

})