describe('make asending Order', () => {

    before(function() {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
    });
    let arr = []
    let obj = {}

    it('make asending order', () => {

        cy.visit('https://way2automation.com/demo.html')
        cy.get('#toggleNav').children().find("a:first").each((el) => {
            // cy.log(el.text())
            arr.push(el.text())
        }).then(() => {
            arr.sort()
            cy.log(arr)
            console.log(arr)
        })

    })

    it('navigation panel text and count boxes with respect to its parents', () => {
        cy.visit('https://way2automation.com/demo.html')
        cy.get('.linkbox.margin-bottom-20').each((el, ind) => {
            cy.log(el.text())
            let objkey = el.find("h1").text()
            let objval = (el.find("ul").children().length)
            switch (ind) {
                case 0:
                    obj[objkey] = objval
                    break;
                case 1:
                    obj[objkey] = objval
                    break;
                case 2:
                    obj[objkey] = objval
                    break;
                case 3:
                    obj[objkey] = objval
                    break;
                case 4:
                    obj[objkey] = objval
                    break;
                default:
                    obj[objkey] = objval
                    break;

            }
        }).then(() => {
            cy.log(obj)
        })

    })

})