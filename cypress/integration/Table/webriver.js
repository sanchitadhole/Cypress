describe('validate table', () => {

    it('validate table on webdriverUnivercity website', () => {

        cy.login('t01', 159)
        cy.login('t02', 163)
    })

    it('validate cricbuzz scoredCard', () => {
        let sum = 0
        cy.visit('https://www.cricbuzz.com/live-cricket-scorecard/38397/rsa-vs-ind-1st-test-india-tour-of-south-africa-2021-22')
        cy.get('#innings_1').find("div[class='cb-col cb-col-100 cb-ltst-wgt-hdr']").first().find(".cb-scrd-itms").each(function(score, index, array) {
            sum = sum + Number(score.find('div').filter('.text-bold').text())
                // cy.log(score.find('div').filter('.text-bold').text())
        }).then(() => {
            expect(sum).to.eq(654)
        })



    })


    it('validate cricbuzz scoredCard', () => {



        cy.visit('https://www.cricbuzz.com/live-cricket-scorecard/38397/rsa-vs-ind-1st-test-india-tour-of-south-africa-2021-22')
        cy.cricbuzz(1)
        cy.cricbuzz(2)
        cy.cricbuzz(3)
        cy.cricbuzz(4)

    })
    it.only('validate cricinfo scoredCard', () => {
        let run = 0
        let extra = 0
        let total = 0
        cy.visit('https://www.espncricinfo.com/series/bangladesh-in-new-zealand-2021-22-1288977/new-zealand-vs-bangladesh-1st-test-1288979/full-scorecard')
        cy.get('.table.batsman').eq(0).find('td[class="font-weight-bold"]').each((el) => {
            cy.log(el.text())
            run = run + Number(el.text())
                // cy.log(run)

        })

        cy.get('.text-right.font-weight-bold').eq(0).then((el) => {
            cy.log(el.text())
            extra = Number(el.text())


        })
        cy.get('.text-right.font-weight-bold').eq(1).then((el) => {
            cy.log(el.text())
            total = Number(el.text())





        })


        .then(() => {
            expect(run + extra).to.eqls(total)
        })
    })






})