describe('Tranversing the DOM in cypress', () => {

    it('children() to get the Children element of the DOM', () => {
        cy.visit("https://recast.studio/")
        cy.get('ul[id="menu-1-b0137a3"]').children().should('have.length', "4")
        cy.get('ul[id="menu-1-b0137a3"]').children('li').eq(0).children().should('have.text', 'Home')
    })

    it('childern() to get the element of DOM element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb').children('.breadcrumb-item.active').should('contain', 'Contact Us')
    })

    it('closest() to validate the closest element of DOM', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.badge-light').closest('ul').should('have.class', 'list-group')
    })

    it('eq() to validate the INDEX wise element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(2).should('contain', 'Milk')
    })

    it('first() to validate the first element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('contain', 'Coffee')
    })

    it('last() to validate the last element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('contain', 'Sugar')
    })

    it('filter() to retrive the element that have specifuc condition', () => {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn-group.btn-group-toggle').children().filter('.active').should('have.text', 'Button-1')
        cy.get('.btn-group.btn-group-toggle').children().filter('.active').should('have.attr', 'type')


    })
    it('find() to find the element', function() {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.pagination.traversal-pagination').find('li').find('a').find('span').should('have.length', '4')
    })
    it('nextAll() to find all next element of given', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', '3')
    })
    it('.not to remove element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().not('list-header').should('have.length', '11')
    })
    it('parent() to get the parent element', () => {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Apple').parent().should('have.class', 'traversal-food-list')

    })
    it('parents() to get the parents element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parents().should('have.class', 'traversal-food-list')
    })
    it('prevAll() to get previous all element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Blackberries').prevAll().should('have.length', '3')
    })
    it.only('prevUntil() to get all previous element', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Figs').prevUntil('fruits').should('have.length', '5')
    })




})