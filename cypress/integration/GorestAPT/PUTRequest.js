describe('validate PUT Request', () => {
    it('validate', () => {
        cy.PutRequest('PUT', "https://gorest.co.in/public/v1/users/30")
            .then((el) => {
                cy.log(el)
                expect(el.body.data).to.have.property('id')
                expect(el.body.data).to.have.property('id', 30)
                expect(el.body.data).to.have.property('name', 'sanchita Dhole')
                expect(el.status).to.eq(200)
            })

    })
})