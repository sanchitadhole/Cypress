describe('Traverse method in cypress', () => {
    beforeEach('before every testcases', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html#')

    })
    it('children() to retrive chiled element', function() {
        cy.get('.breadcrumb.traversal-breadcrumb').children('.active').should('have.text', 'Contact Us')
    })

    it('first() to retrive first element', function() {
        cy.get('.breadcrumb.traversal-breadcrumb').children().first().should('have.text', 'Home')
    })

    it('last() to retrive first element', function() {
        cy.get('.breadcrumb.traversal-breadcrumb').children().last().should('have.text', 'Contact Us')
    })

    it('eq() to retrive element to based on nodelist', function() {
        cy.get('.breadcrumb.traversal-breadcrumb').children().eq(0).should('have.text', 'Home')
    })

    it('parent() to get immetiate parent on the html page', function() {
        cy.contains('Andy').parent().should('have.class', 'bg-info')
    })

    it('next() to get immetiate next on the html page', function() {
        cy.contains('Andy').next().should('have.text', 'Otto')
    })

    it('prev() to get the next sibling element', function() {
        cy.contains('Andy').prev().should('have.text', '1')
    })

    it('closet() to get closet ancestor element from current element', function() {
        cy.contains('Andy').closest('table').should('have.attr', 'class', 'table table-light traversal-table')
    })

    it('find() to get desendent dom element', function() {
        cy.get('.pagination.traversal-pagination').find('li').find('a').should('have.length', '7')
    })

    it('filter() to get specific DOM element from list of element  ', function() {
        cy.get('.breadcrumb.traversal-breadcrumb').find('li').filter('.active').should('have.text', 'Contact Us')
    })

    it('not() to get unwanted element  ', function() {
        cy.get('.btn').not('.disabled').should('have.length', '12')
    })

    it('nextAll to get unwanted element  ', function() {
        cy.get('#coffee').nextAll().should('have.length', '4')

    })

    it('nextUntil() to get elements from one siblings from another siblings  ', function() {
        cy.get('#coffee').nextUntil('#espresso').should('have.length', '2')
    })

    it('siblings() to get siblings of the current element ', function() {
        cy.get('#coffee').siblings().should('have.length', '4')
    })

})