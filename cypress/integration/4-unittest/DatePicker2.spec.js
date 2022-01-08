// describe('datepicker', () => {
//     it('first testcase', () => {
//         let d = new Date
//         cy.log(d.getDate())
//         cy.log(d.getDay())




//     })


//     it('redbus testcase', () => {
//         cy.visit('https://www.redbus.com/')
//         let d = new Date();
//         d.setDate(d.getDate() + 300)
//         let year = d.getFullYear()
//         let month = d.toLocaleString('default', { month: 'long' })
//         let futuredate = d.getDate()
//         cy.log(year)
//         cy.log(month)

//         function selectmonthyr() {
//             cy.get('.fl.icon-calendar_icon-new.icon-onward-calendar').click()
//             cy.get('.monthTitle').last().then((el) => {
//                 cy.log(el.text())
//                 if (!el.text().includes(year)) {
//                     cy.get('.next').eq(1).click()
//                         // selectmonthyr()

//                 }
//             }).then(() => {
//                 cy.get('.monthTitle').last().then((el) => {
//                     cy.log(el.text())
//                     if (!el.text().includes(month)) {
//                         cy.get('.next').eq(1).click()
//                             // selectmonthyr()
//                     }
//                 })

//             })

//         }

//         function selectDate() {
//             cy.get('.wd.day').contains(futuredate).click({ force: true })
//             return true
//         }
//         selectmonthyr()
//         selectDate()
//     })

// })


describe('Red Bus Time Picker', () => {

    it('Red Bus Time Picker', () => {

        cy.visit('https://www.redbus.com/')

        let dtt = new Date();
        dtt.setDate(dtt.getDate() + 160)
            //  dtt.setDate(dtt.getDate() + 150)

        cy.log('*** On Ward ***')

        let onWardYear = dtt.getFullYear()
        let onWardMonth = dtt.toLocaleString('default', { month: 'short' })
        let onWardDate = dtt.getDate()
        cy.log(onWardYear)
        cy.log(onWardMonth)
        cy.log(onWardDate)

        cy.get('#onward_cal').click({ force: true })

        function selectOnwardMonthYear() {
            cy.get('.monthTitle').last().then((el) => {
                if (!el.text().includes(onWardYear)) {
                    cy.log(el.text())
                    cy.get('.next').last().click()
                    selectOnwardMonthYear()
                }
            }).then((el) => {
                if (!el.text().includes(onWardMonth)) {
                    cy.log(el.text())
                    cy.get('.next').last().click()
                    selectOnwardMonthYear()
                }
            })

        }

        function selectOnwardDate() {
            cy.get('#rb-calendar_onward_cal').children().find('td.wd.day').each((el) => {
                // cy.log(el.text())
                if (el.text().includes(onWardDate)) {
                    cy.log(el.text())
                    el.click()
                }
            })
        }

        selectOnwardMonthYear()
        selectOnwardDate()



        //////////////////////////////// Return Date //////////////////////////////

        //         let dt2 = new Date();
        //         dt2.setDate(dt2.getDate() + 260)
        //             //  dt2.setDate(dt2.getDate() + 150)

        //         cy.log('*** Return Date ***')

        //         let returnYear = dt2.getFullYear()
        //         let returnMonth = dt2.toLocaleString('default', { month: 'short' })
        //         let returnDate = dt2.getDate()
        //         cy.log(returnYear)
        //         cy.log(returnMonth)
        //         cy.log(returnDate)


        //         cy.get('#return_cal').click({ force: true })

        //         function selectReturnMonthYear() {
        //             cy.get('.monthTitle').last().then((el) => {
        //                 if (!el.text().includes(returnYear)) {
        //                     cy.log(el.text())
        //                     cy.get('.next').last().click()
        //                     selectReturnMonthYear()
        //                 }
        //             }).then((el) => {
        //                 if (!el.text().includes(returnMonth)) {
        //                     cy.log(el.text())
        //                     cy.get('.next').last().click()
        //                     selectReturnMonthYear()
        //                 }
        //             })
        //         }

        //         function selectReturnDate() {
        //             cy.get('#rb-calendar_return_cal').children().find('td.wd.day').each((el) => {
        //                 // cy.log(el.text())
        //                 if (el.text().includes(returnDate)) {
        //                     cy.log(el.text())
        //                     el.click()
        //                 }
        //             })
        //         }

        //         selectReturnMonthYear()
        //         selectReturnDate()
    })

})