// describe('validate the post request', () => {
//     it('post request', () => {
//         cy.request({
//             method: 'POST',
//             url: 'https://reqres.in/api/users',
//             body: {
//                 "name": "morpheus",
//                 "job": "leader"
//             }


//         }).then(response ,function() {
//             expect(response.status).to.eq(201)


//         })

//     })
// })



describe("Verify Api functionality", function() {
    it("Verify the GET api", function() {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/unknown",
        }).then('response', function() {
            expect(response.status).to.eq(200)
        })
    })
})