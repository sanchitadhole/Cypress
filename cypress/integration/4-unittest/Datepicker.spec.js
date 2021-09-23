describe('automate calender', () => {
    it('validate the datepicker', () => {
        // let d = new Date();
        // cy.log(d.getDate())
        // cy.log(d.getFullYear())
        // cy.log(d.getMonth())
        // cy.log(d.toLocaleString('default', { month: 'long' }))

        // let d2 = new Date();
        // d2.setDate(d2.getDate() + 400)
        // cy.log(d2.getFullYear())
        // cy.log(d2.getDate())
        // cy.log(d2.toLocaleString('default', { month: 'long' }))


        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        let d2 = new Date();
        d2.setDate(d2.getDate() + 500)
        let year = d2.getFullYear()
        let month = d2.toLocaleString('default', { month: 'long' })
        let futuredate = d2.getDate()
        cy.log(year)
        cy.log(month)


        function selectmonthyear() {

            cy.get('#datepicker').click()
            cy.get('.datepicker-switch').first().then((el) => {
                cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectmonthyear()
                }
            }).then(() => {
                cy.get('.datepicker-switch').first().then((el) => {
                    cy.log(el.text())
                    if (!el.text().includes(month)) {
                        cy.get('.next').first().click()
                        selectmonthyear()
                    }
                })
            })


        }

        function selectData() {
            cy.get('.day').contains(futuredate).click()
            return true
        }

        selectmonthyear()
        selectData()


    })
})