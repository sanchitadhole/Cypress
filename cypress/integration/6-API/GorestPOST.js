describe('validate post request', () => {
    it('validate post', () => {

        function generateEmail() {
            let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
            let string = '';
            for (var ii = 0; ii < 15; ii++) {
                string += chars[Math.floor(Math.random() * chars.length)];
            }
            return string + '@gmail.com';
        }

        cy.fixture('gorest').then(function(payload) {
            payload.email = generateEmail()
            cy.GETApi('POST', 'https://gorest.co.in/public/v1/users', payload)

            .then((response) => {
                expect(response.body.data).to.have.property('email')
                expect(response.status).to.eq(201)
                return response.body.data
            }).then((ele) => {
                cy.GETApi('GET', `https://gorest.co.in/public/v1/users/${ele.id}`).then((el) => {
                    expect(el.body.data.email).to.equal(payload.email)
                    expect(el.body.data.name).to.equal(payload.name)
                    expect(el.body.data.gender).to.equal(payload.gender)
                    expect(el.body.data.status).to.equal(payload.status)
                        // expect(ele).to.have.property('name')
                        // expect(ele).to.have.property('email')
                        // expect(ele).to.have.property('gender')
                        // expect(ele).to.have.property('status')

                })




            })

        })


    })


    // let payload = {

    //     "name": "Dharitr Jr.123",
    //     "email": generateEmail(),
    //     "gender": "female",
    //     "status": "active"

    // }

})