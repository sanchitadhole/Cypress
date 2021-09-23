describe('dropdown testcases', () => {
    it('valudate the functionality of dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option1')
        cy.get('#dropdown-class-example').should('have.value', 'option1')
        cy.get('#checkBoxOption1').check().should('have.value', 'option1')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option1', 'option2', 'option3'])
    })

    it('valide the functionality of dropdown', () => {
        cy.visit('www.google.com')
        cy.get('input[name="q"]').type('python')
        cy.get('.erkvQe').find('li').each(function(el) {
            cy.log(el.text())
            if (el.text().includes('tutorial')) {
                el.click()
            }
        })

        cy.url().should('include', 'tutorial')

    })
    it('validate the functionality of dropdown', () => {
        cy.visit('www.google.com')

    })

    it('validate the dropdown', () => {
        cy.visit('https://www.oyorooms.com/')
        cy.get('#autoComplete__home').type('pune')
        cy.get('.geoSuggestionsList__container').find('div').each(function(el) {
            Array.from(el).forEach(function(el) {
                if (el.textContent.includes('shivaji')) {
                    el.click()
                }
            })
        })

    })


    it("keasri", () => {
        cy.visit("https://ksrtc.in")
        cy.get("#fromPlaceName").type("BAL")
        cy.get(".ui-autocomplete >li>a").each((el) => {
            if (el.text() == "BALLARI") {
                cy.wrap(el).click()
            }
        })

    })



})