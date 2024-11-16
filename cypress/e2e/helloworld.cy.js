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
    cy.title().should('eq',"DEMOQA");
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

})