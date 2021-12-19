describe('validate API', () => {
    it('validate Api', () => {
        cy.GETApi('GET', 'https://gorest.co.in/public/v1/users')




        .then(function(response) {
            expect(response.status).to.eq(200)
            expect(response.body.data.length).to.eq(20)
                // expect(response.body.meta.pagination.total).to.eq(1495)

            return response.body.data[0].id


        }).then((id) => {

            cy.GETApi('GET', `https://gorest.co.in/public/v1/users/${id}`)
                .then((response) => {
                    expect(response.body.data).to.have.property('email')
                    expect(response.body.data).to.have.property('gender')


                })

        })

    })
})