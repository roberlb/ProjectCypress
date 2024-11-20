/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
describe('Bienvenido al curso de cypress', () => {

  it('Hello World', () => {
    cy.log("Hello World");
    cy.wait(1000);
  })

  it('Validamos el ingreso de datos en Text-box [DemoQA]', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', "DEMOQA");
    cy.get('#userName').type('Juanito')
    cy.get('#userEmail').type("email@email.com")
    cy.get('#currentAddress').type('Av. Javier Prado 123')
    cy.get('#permanentAddress').type('Av. Defensores de Morro #123')
    cy.get('#submit').click();

  });

  it('Validamos el uso del ENTER', () => {
    cy.visit('https://www.google.com/?hl=es');
    cy.get('#APjFqb').type("Cypress io{enter}");
    cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click();
  });

  it('Usando PageUP - PageDown', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', "DEMOQA");
    cy.wait(1000);
    cy.get('#userName').type('{pageUp}')
  });

  it('Usando assert ', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', "DEMOQA");
    cy.wait(2000)
    cy.get('#userName').should('be.visible').type('Juanito')
    cy.wait(2000)
    cy.get('#userEmail').should('be.empty').type("email@email.com")
    cy.wait(2000)
    cy.get('#currentAddress').should('be.visible').type('Av. Javier Prado 123')
    cy.wait(2000)
    cy.get('#permanentAddress').type('Av. Defensores de Morro #123')
    cy.wait(2000)
    cy.get('#submit').should('be.enabled').click();

  });

  it('Test description', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("[name='username']").should('be.visible').type("Admin")
    cy.get("[name='password']").should('be.visible').type("admin123")
    cy.get('.oxd-button').should('be.visible').click({ force: true })
    cy.get('.oxd-topbar-header-title').should('be.visible').click(100, 40)
  });

  it.only('Reto 1:', () => {
    cy.visit('https://demoqa.com/webtables');
    cy.get('#addNewRecordButton').should('be.enabled').click()
    cy.get('#registration-form-modal').should('be.visible')
    cy.get('#registration-form-modal').should('have.text', 'Registration Form')
    cy.get('#firstName').should('be.visible').type("Juan")
    cy.get('#lastName').should('be.visible').type("Perez")
    cy.get('#userEmail').should('be.visible').type("test@test.test")
    cy.get('#age').should('be.visible').type("18")
    cy.get('#salary').should('be.visible').type("3000")
    cy.get('#department').should('be.visible').type("Lima")
    cy.get('#submit').should('be.enabled').click()
    cy.get('.rt-table').scrollTo('right', { duration: 1000 })
    cy.get('#edit-record-4').should('be.visible').click()
    cy.get('#firstName').should('be.visible').type("{selectAll}{del}Pedro")
    cy.get('#submit').should('be.enabled').click()
    cy.get('#delete-record-4').should('be.visible').click()
  });

})