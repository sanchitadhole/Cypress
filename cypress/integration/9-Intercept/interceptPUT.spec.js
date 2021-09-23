describe('PUT request', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('PUT request', () => {

        cy.fixture('test').then((body) => {
            cy.intercept({
                method: "PUT",
                url: '**/comments/*'

            }, {
                'body': body
            }).as('putrequest')

        })



        cy.get('button[class="network-put btn btn-warning"]').click()
        cy.get('@putrequest').should(({ request, response }) => {
            cy.log(request)
            cy.log(response)

        })


    })


})