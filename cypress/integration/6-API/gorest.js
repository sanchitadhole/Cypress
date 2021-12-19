describe('validate API', () => {
    it('validate Api', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                Authorization: "Bearer b60677e5cdd426f129ddb100c41105a4f47e2a1c5721cc618a4030cc4467d94d"
            }


        }).then(function(response) {
            expect(response.status).to.eq(200)
            expect(response.body.data.length).to.eq(20)
            expect(response.body.meta.pagination.total).to.eq(1495)

            let a = response.body.data.find(function(el) {
                return el == 65
            })
            return a
        })
    })
})