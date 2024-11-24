Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

require('cypress-xpath')

describe('Reto 2', () => {
  it('Ingreso de una computadora', () => {
    cy.visit('https://computer-database.gatling.io/computers');
    cy.title().should('eq', 'Computers database')
    cy.xpath("//a[text()='Add a new computer']").should('be.visible').click()
    cy.get('#name').should('be.visible').type('MAC OS')
    cy.get("[name='introduced']").should('be.visible').type('2020-04-12')
    cy.get('input#discontinued').should('be.visible').type('1999-01-06')
    cy.xpath("//input[@id='discontinued' and @name='discontinued']").should('be.visible').clear().type('2000-05-09')
    cy.xpath("//input[@id='discontinued' and @name='discontinued']").should('be.visible').type('{selectall}{del}2000-05-09')
    cy.xpath("//select[contains(text(),'')]").should('be.visible')
    cy.get('#company').select('MOS Technology').should('have.value', '7')
    cy.get("input[class='btn primary']").click()
  });

  it('Validacion de CheckBox 1', () => {
    cy.visit('https://demoqa.com/checkbox');
    cy.title().should('eq', 'DEMOQA')
    cy.get("svg[class='rct-icon rct-icon-uncheck']").click()
  });

  it('Validacion de CheckBox 2', () => {
    cy.visit('https://demoqa.com/checkbox');
    cy.title().should('eq', 'DEMOQA')
    cy.get("button[title='Toggle']").click()
  });

  it('Validacion de CheckBox 3', () => {
    cy.visit('https://demoqa.com/checkbox');
    cy.title().should('eq', 'DEMOQA')
    cy.get("button[title='Toggle']").click()
    cy.get("label[for='tree-node-desktop'] svg.rct-icon-uncheck").click()
    cy.get("label[for='tree-node-documents'] svg.rct-icon-uncheck").click()
    cy.get("label[for='tree-node-downloads'] svg.rct-icon-uncheck").click()
    cy.get("label[for='tree-node-desktop'] svg.rct-icon-check").click()
    cy.get("label[for='tree-node-documents'] svg.rct-icon-check").click()
    cy.get("label[for='tree-node-downloads'] svg.rct-icon-check").click()
  });

  it('Validacion de radious button', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.title().should('eq', 'DEMOQA')
    cy.get("label[for='yesRadio']").should('be.visible').and('not.be.selected').click()
    cy.get("label[for='impressiveRadio']").should('be.visible').and('not.be.selected').click()
    cy.get("label[for='noRadio']").should('not.be.enabled').click().should('not.be.selected')
  });

  it('Validacion de select', () => {
    cy.visit('https://demoqa.com/select-menu')
    cy.title().should('eq', 'DEMOQA')
    cy.get('#withOptGroup').should('be.visible').click()
    cy.get('.css-1n7v3ny-option').click()
  });

})