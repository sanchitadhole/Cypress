describe('validate', () => {
    it('validate', () => {

        cy.get("GET", 'https://gorest.co.in/public/v1/posts')
            .then((response) => {
                expect(response.body.data.length).to.eq(20)
                expect(response.body.data.id)

                return response.body.data[0]


            }).then((response) => {
                cy.log(response)
                expect(response).to.have.property('title')
                expect(response).to.have.property('user_id')
                expect(response).to.have.property('title')
                expect(response).to.have.property('body')





            })
    })

})