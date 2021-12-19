describe('validate Api', () => {
    it('validate Api', () => {
        cy.GETApi('GET', 'https://gorest.co.in/public/v1/users')
            .then((el) => {
                expect(el.status).to.eq(200)

                return el.body.data
            }).then((ele) => {
                ele.forEach(element => {
                    cy.GETApi('GET', `https://gorest.co.in/public/v1/users/${element.id}`)
                        .then((response) => {
                            expect(response.body.data).to.have.property('email')
                        })



                });

            })

    })

})