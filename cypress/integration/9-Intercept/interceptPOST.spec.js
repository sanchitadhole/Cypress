describe('intercept with network', () => {


    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })
    it('POST request', () => {
        cy.fixture('test').then((body) => {

            cy.intercept({
                method: "POST",
                url: "https://jsonplaceholder.cypress.io/comments",
            }, {
                "name": "Using POST in cy.intercept()",
                "email": "sanchitadhole@gmail.com",
                'body': "message",
                "id": 501
            }).as('postrequest')


            cy.get('.network-post.btn.btn-success').click()
            cy.wait('@postrequest').should(({ request, response }) => {
                cy.log(request)
                cy.log(response)
                expect(request.body).to.eql("name=Using+POST+in+cy.intercept()&email=hello%40cypress.io&body=You+can+change+the+method+used+for+cy.intercept()+to+be+GET%2C+POST%2C+PUT%2C+PATCH%2C+or+DELETE")

            })

        })

    })
})