describe('validate the delete request', () => {
    it('Delete request', () => {
        cy.request({
            method: 'DELETE',
            url: "https://reqres.in/api/users/2"
        }).then((response => {
            expect(response.status).to.eq(204)
            expect(response.duration).to.eq()


        }))
    })
})