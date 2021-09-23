describe('verify paypal request', () => {

    let token = null


    it('Generate Token', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            form: true,
            headers: {
                authorization: 'Basic QWY1Vm1sMmFQR3BvV09FeXk2Rlp1eXFkenZhMUFDbV82a1RWZVF5VmhHVUYyNGxCYWpBcnZINFRZT1VSMzJfTlZyMHFIdVRKa0R1dVFGQnM6RUVYdllPdHFJMENiT0g3b0pyTExmaEFLOHhzSE1MNnZNTUVkNWFnQWdqcnNvRThBcnZTQ2RJbG03bVJvZW1Wcm03bnZSYlBxLWZnaVBMZlk=',

            },
            body: {
                grant_type: 'client_credentials',

            }

        }).then((response) => {
            // expect(response.status).to.eq(200)
            cy.log(response.body)
            token = response.body.access_token
            cy.log(token)
        })
    })
    it('Create Orders', () => {

        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',

            headers: {
                authorization: `Bearer ${token} `,
                "content-Type": "application/json",
            },
            body: {

                "intent": "CAPTURE",
                "purchase_units": [{
                    "amount": {
                        "currency_code": "USD",
                        "value": "100.00"
                    }
                }]
            }

        }).then((response) => {
            expect(response.status).to.eq(201)
        })

    })

})