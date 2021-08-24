describe('verify the Heroku', () => {

    it('Verify the  heroku GET api', () => {

        cy.request({
            method: 'GET',
            url: 'https://the-internet.herokuapp.com/basic_auth',
            headers: {
                authorization: "Basic YWRtaW46YWRtaW4="
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    })

})