describe('upload a file in cypress testcases ', () => {

    beforeEach('each test case', () => {
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html?filename=abc.png')
    })

    it('file uploades', () => {

        const fix = 'abc.png'
        cy.get('#myFile').attachFile(fix)
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')

        })

    })

    it('not uploading file that time display message', () => {

        const fix = 'abc.png'
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')

        })
    })

    it('multiple file upload', () => {
        let a = 'abc.png'
        let b = 'abc.png'
        cy.get('#myFile').attachFile([a, b])
        cy.get('#submit-button').click()
        cy.on('window:alert', (st) => {
            expect(st).to.eql('Your file has now been uploaded!')

        })
    })






})

// You need to select a file to upload!