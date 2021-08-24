describe('validate put request', () => {
    it('put request', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "sanchita",
                "job": "web developer"
            }

        }).then(response => {
            expect(response.status).to.eq(200)
        })

    })
})