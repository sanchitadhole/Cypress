describe('intercept with network', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('get request', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"

        }).as("getRequest")

        cy.get(".network-btn.btn").click()
        cy.wait("@getRequest").should(({ request, response }) => {

            cy.log(response)
            cy.log(request);
            expect(response.statusCode).to.eq(200)
            expect(response.body).contains({
                'body': "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            })
        })
    })

    it('post request', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }, {
            "name": "Using POST in cy.intercept()",
            "email": "hello@cypress.io",
            "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",

        }).as("PostRequest")

        cy.get(".network-post.btn").click()
        cy.wait("@PostRequest").then(({ request: rq, response: rs }) => {
            // cy.log(rq)
            // cy.log(rs)
            return rs

        }).then((res) => {
            expect(res.statusCode).to.eq(200)
            expect(res.body).to.eql("You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE")
            cy.get(".network-post-comment").should('have.text', 'POST successful!')
        })
    })

    it('put Request', () => {

        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }, {
            "name": "Using PUT in cy.intercept()",
            "email": "hello@cypress.io",
            "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
            "id": 1
        }).as("PutRequest")

        cy.get(".network-put.btn").click()
        cy.wait("@PutRequest").then(({ request, response }) => {
            return response
        }).then((str) => {
            cy.log(str)
            expect(str.statusCode).to.eq(200)
            expect(str.body).to.equal("You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE")
            expect(str.statusMessage).to.eq(null)
        })


    })

})