describe('validate coop API', () => {
    it('validate coop API', () => {
        cy.request({
            method: "POST",
            url: "http://coop.apps.symfonycasts.com/token",

            body: {
                grant_type: 'client_credentials',
                client_id: 'minskole123',
                client_secret: "ea7bf0467dd70ef7c01c219c50f30bcf"
            },
            form: true,

        }).then((response) => {
            expect(response.status).to.eq(200)
            return response.body.access_token

        }).then((token) => {

            cy.request({
                method: "GET",
                url: "http://coop.apps.symfonycasts.com/api/me",
                headers: {
                    Authorization: `Bearer ${token}`
                },


            }).then((response) => {
                expect(response.body.email).to.equal("sanchitadhole@gmail.com")
            }).then((res) => {
                cy.request({
                    method: "POST",
                    url: `http://coop.apps.symfonycasts.com/api/${res.body.id}/barn-unlock`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((res) => {
                    // cy.log(res)
                    expect(res.body.success).to.eq(true)
                    expect(res.body.message).to.eq('You just unlocked your barn! Watch out for strangers!')
                })


            })
        })

    })


})