describe('validate coop API', () => {

    let token = ''
    let UId = ''
    beforeEach(() => {
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
            token = response.body.access_token

        })

    })

    it("Retrieves user that's tied to the access token", () => {
        cy.request({
            method: "GET",
            url: "http://coop.apps.symfonycasts.com/api/me",
            headers: {
                Authorization: `Bearer ${token}`
            },

        }).then((response) => {
            expect(response.status).to.eq(200)
            UId = response.body.id
        })
    })




    it('Unlock the Barn', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${UId}/barn-unlock`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            // cy.log(res)
            expect(res.body.success).to.eq(true)
            expect(res.body.message).to.eq("You just unlocked your barn! Watch out for strangers!")
        })
    })


    it('Put the Toilet Seat Down', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${UId}/barn-unlock`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            // cy.log(res)
            expect(res.body.message).to.equal("The barn is already wide open! Let's throw a party!")

        })
    })


    it('Feed Your Chickens', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${UId}/barn-unlock`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            // cy.log(res)
            expect(res.body.message).to.equal("The barn is already wide open! Let's throw a party!")

        })

    })

    it('Collect Eggs from Your Chickens', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${UId}/eggs-count`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            // cy.log(res)
            expect(res.body.message).to.equal('You have collected a total of 0 eggs today')

        })
    })


    it('Get the Number of Eggs Collected Today', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${UId}/eggs-count`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            // cy.log(res)
            expect(res.body.action).to.eq('eggs-count')
        })
    })


})