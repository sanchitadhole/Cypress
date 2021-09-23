describe('verify the checkbox functionality with check', () => {
    // it('validate the checkbox functionality with check', () => {
    //     cy.visit('https://www.spicejet.com/')
    //     cy.get('#ctl00_mainContent_rbtnl_Trip_1').click()
    //     cy.get("label[for='ctl00_mainContent_rbtnl_Trip_1']").should("have.class", "select-label")
    // })

    // it('varify the checkbox functionality with uncheck', () => {
    //     cy.visit('https://www.spicejet.com/')
    //     cy.get('#ctl00_mainContent_rbtnl_Trip_0').click()
    //     cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should('not.have.class', 'select-label')
    // })

    // it('verify the second check box with check ', () => {
    //     cy.visit('https://www.spicejet.com/')
    //     cy.get('#ctl00_mainContent_rbtnl_Trip_0').click()
    //     cy.get("label[for='ctl00_mainContent_rbtnl_Trip_0']").should("have.class", "select-label")
    // })
    // it('verify the second checkbox functionality with uncheck', () => {
    //     cy.visit('https://www.spicejet.com/')
    //     cy.get('#ctl00_mainContent_rbtnl_Trip_1')
    //     cy.get("label[for='ctl00_mainContent_rbtnl_Trip_0']").should("have.class", "select-label")

    // })
    // it.only('varify functionality of radio button', () => {
    //         cy.visit('https://www.spicejet.com/')
    //         cy.get('input[value="RoundTrip"]').as('RoundTrip')
    //         cy.get('input[value="OneWay"]').as('OneWay')
    //         cy.get('@RoundTrip').first().check()
    //         cy.get('@RoundTrip').should('be.checked')
    //         cy.get('@OneWay').first().check()
    //         cy.get('@RoundTrip').should('be.unchecked')




    //     })
    // it('validate the radio button', () => {
    //         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //         cy.get('input[value="cabbage"]').should('be.disabled')
    //         cy.get('input[value="pumpkin"]').should('be.not.disabled')
    //     })
    // it('validate the radio button 2', () => {
    //     cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //     cy.get('input[value="lettuce"]').should('be.not.disabled')
    //     cy.get('input[value="pumpkin"]').should('be.not.disabled')
    // })

    it('validate the radio buttons', () => {
            cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('input[value="green"]').click()
            cy.get('input[value="green"]').should('be.checked')
            cy.get('input[value="blue"]').click()
            cy.get('input[value="green"]').should('not.be.checked')


        })
        //     it('validate the checkbox', () => {
        //         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //         cy.get('input[value="option-1"]').should('be.check')
        //     })
        //     it.only('validate the single checkbox', () => {
        //         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //         cy.get('input[value="option-1"]').as('option-1')
        //         cy.get('@option-1').check()
        //         cy.get('@option-1').should('be.checked')
        //         cy.get('@option-1').uncheck()
        //         cy.get('@option-1').should('not.be.checked')
        //     })

    //     it('varify multiple checkboxes', () => {
    //         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //         cy.get('#checkboxes').find('input').check(['option-1', 'option-2', 'option-3', 'option-4'])
    //     })





})