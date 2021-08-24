describe("Get Request", () => {

    it('validate the POST request', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',

            body: {
                name: "morpheus",
                job: "leader"
            }
            
        }).then(response => {
            expect(response.status).eq(201)
        })
    })
})