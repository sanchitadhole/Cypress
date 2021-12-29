describe('validate the get request', () => {
    it('validate the get request', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v1/users/",
            headers: {
                Authorization: "Bearer b60677e5cdd426f129ddb100c41105a4f47e2a1c5721cc618a4030cc4467d94d"
            }

        }).then((response) => {
            // cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body.data[0]).to.have.property('id')
            expect(response.body.data[0]).to.have.property('name')
            expect(response.body.data[0]).to.have.property('email')
            return response.body.data

        }).then((el) => {
            cy.log((el));

            el.forEach((el) => {
                cy.log(el)
                expect(el).to.have.property('id')
                expect(el).to.have.property('name')
                expect(el).to.have.property('gender')
                expect(el).to.have.property('status')

            })
        })
    })
})