// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




// Cypress.Commands.add('login', (email, password) => {
//     // cy.visit('https://app.recast.studio/auth/login/?next=/')
//     cy.get('input[placeholder ="Email"]').type(email)
//     cy.get('input[type = "password"]').type(password)
//     cy.get('button[type = "submit"]').click()
// })


Cypress.Commands.add('tablesum', (id, total) => {
    let sum = 0
    let regres = /[0-9]/
    cy.get(`#t0${id}`).find('tbody').find('tr').find('td').each((el, index, arr) => {
        if (regres.test(Number(el.text()))) {
            sum = sum + Number(el.text())
        }

    }).then(function() {
        expect(sum).to.eqls(total)
    })
})