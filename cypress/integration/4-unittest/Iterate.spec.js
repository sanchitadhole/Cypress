describe('iterate the element', () => {
    it('validate title skincare', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#categorymenu > nav > ul > li:nth-child(4) > a').click()



        cy.get('.mt10').find('a').each(function(el) {
            let expectedArraray = ['Eyes', 'Gift Ideas & Sets', 'Hands & Nails', 'Face', 'Sun']
            expect(expectedArraray.indexOf(el.text())).to.be.greaterThan(-1)

        })


    })
    it.only('varify the total score', () => {

        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard')
        let sum = 0
        let total = 0
            // let extras = 0

        cy.get('.table.batsman').first().find('tbody td.font-weight-bold').each((el, index, list) => {
            sum = sum + Number(el.text())
                // console.log(el.text())

        }).then(() => {
            cy.log(sum)
                // cy.get('.batsman').find('tr[class = "extras"]').children().eq(2).then((el) => {
                //     extras = Number(el.text())
            cy.get('.batsman').first().find('tfoot').find('td[class = "text-right font-weight-bold"]').then((el) => {
                total = Number(el.text())
                expect(total).to.eq(sum)
                    // })








            })

        })

    })

})