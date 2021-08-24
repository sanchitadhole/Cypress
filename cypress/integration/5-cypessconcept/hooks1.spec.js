describe('verify the login functionality', () => {

    beforeEach('before test case', () => {
        cy.visit('https://app.recast.studio/auth/login/?next=/')
        cy.login('sanchitadhole27@gmail.com', 'sanchu05')
    })
    afterEach(() => {
        console.log('after every testcase')
    })

    it('verify login with valid credential', () => {

        cy.get('h4[class ="ant-typography"]').first().should('have.text', 'Create New Project')

    })

    it('login with invalid credential', function() {


        cy.url().should('have.include', 'login')



    })

})