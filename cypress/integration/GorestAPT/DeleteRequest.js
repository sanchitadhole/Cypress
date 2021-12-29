describe('Delete user Request', () => {
    it('Create User then delete this user', () => {

        function generateEmail() {
            let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
            let string = '';
            for (var ii = 0; ii < 15; ii++) {
                string += chars[Math.floor(Math.random() * chars.length)];
            }
            return string + '@gmail.com';
        }
        cy.fixture("gorest").then((payload) => {
            payload.email = generateEmail()

            cy.DELETEApi("POST", 'https://gorest.co.in/public/v1/users', payload)
                .then((response) => {
                    expect(response.body.data).has.property('name', 'Sanchita Dhole')
                    expect(response.status).to.equal(201)

                    // return response.body.data
                }).then((el) => {
                    cy.log(el);
                    let userID = el.body.data.id

                    cy.DELETEApi("DELETE", `https://gorest.co.in/public/v1/users/${userID},`)
                        .then((res) => {
                            expect(res.status).to.eq(204)
                        })

                })

        })

    })
})