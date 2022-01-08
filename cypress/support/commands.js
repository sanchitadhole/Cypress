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


import 'cypress-file-upload';

// Cypress.Commands.add('tablesum', (id, total) => {
//     let sum = 0
//     let regres = /[0-9]/
//     cy.get(`#t0${id}`).find('tbody').find('tr').find('td').each((el, index, arr) => {
//         if (regres.test(Number(el.text()))) {
//             sum = sum + Number(el.text())
//         }

//     }).then(function() {
//         expect(sum).to.eqls(total)
//     })
// })



Cypress.Commands.add('GETApi', (method, url, body) => {

    if (!body) {
        cy.request({
            method: method,
            url: url,
            headers: {
                Authorization: "Bearer b60677e5cdd426f129ddb100c41105a4f47e2a1c5721cc618a4030cc4467d94d"
            }


        })

    } else {
        cy.request({
            method: method,
            url: url,
            headers: {
                Authorization: "Bearer b60677e5cdd426f129ddb100c41105a4f47e2a1c5721cc618a4030cc4467d94d"
            },
            body: body


        })
    }


})





Cypress.Commands.add('PutRequest', (method, url) => {

    cy.request({
        method: method,
        url: url,
        headers: {
            Authorization: "Bearer b60677e5cdd426f129ddb100c41105a4f47e2a1c5721cc618a4030cc4467d94d"
        }

    })

})

Cypress.Commands.add('DELETEApi', (method, url, body) => {

    cy.request({
        method: method,
        url: url,
        headers: {
            Authorization: "Bearer b60677e5cdd426f129ddb100c41105a4f47e2a1c5721cc618a4030cc4467d94d"
        },

        body: body
    })
})

Cypress.Commands.add('login', (id, expectedoutput) => {
    let sum = 0
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get(`#${id}`).find('tbody').find('tr').each((row, index) => {
        if (index != 0) {
            sum = sum + Number(row.find('td').last().text())
        }
    }).then(() => {
        expect(sum).to.eq(expectedoutput)
    })



})


Cypress.Commands.add('cricbuzz', (id) => {
    let sum = 0
    let arr = []
    let total = 0
    let Extras = 0

    cy.get(`#innings_${id}`).find("div[class='cb-col cb-col-100 cb-ltst-wgt-hdr']").first().find(".cb-scrd-itms").find('.text-bold').each(function(score, index, array) {
        arr.push(Number(score.text()))

    }).then(() => {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == arr[arr.length - 1]) {
                total = arr[i]

            } else if (arr[i] == arr[arr.length - 2]) {
                Extras = arr[i]
            } else {
                sum = sum + arr[i]
            }
        }

        cy.log(total)
        cy.log(Extras)
        cy.log(sum)
        expect(sum + Extras).to.eql(total)
    })



})


Cypress.Commands.add('Datepicker', (id) => {
    let date = new Date()

    // cy.log(date.getDate())
    date.setDate(date.getDate() + 40)
        // cy.log(date.getDate())
    let month = date.toLocaleString('default', { month: 'long' })
        // cy.log(month)
    let year = date.getFullYear()
        // cy.log(year)

    cy.get('._2k43').eq(id).click()

    function selectmonth() {
        cy.get('.react-datepicker__current-month').last().then((el) => {

            if (!el.text().includes(year)) {
                // cy.log(el.text())
                cy.get('.react-datepicker__navigation.react-datepicker__navigation--next').click({ force: true })
                selectmonth()
            }
        })

        .then((el) => {
            let str = el.text()
            let str2 = el.text().slice(0, str.length - 5)
            cy.log(month)
            if (str2 !== (month)) {
                // cy.log(el.text())
                cy.get('.react-datepicker__navigation.react-datepicker__navigation--next').click({ force: true })
                selectmonth()
            }
        })
    }

    function selectDate() {
        cy.get('.react-datepicker__month').last().find('div').find('div').not('.react-datepicker__day.react-datepicker__day--disabled').not('.react-datepicker__day.react-datepicker__day--outside-month').each((el) => {

            if (el.text().includes((date.getDate()))) {
                cy.log(el.text())
                el.click()
            }
        })
    }
    selectmonth()
    selectDate()
})