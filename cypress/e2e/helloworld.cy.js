Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
describe('Bienvenido al curso de cypress', () => {
  it('Hello World', () => {
    cy.log("Hello World");;
  })
  it('Validamos el ingreso de datos en Text-box [DemoQA]', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.get('#userName').type('Juanito')
    cy.get('#userEmail').type("email@email.com")
    cy.get('#currentAddress').type('Av. Javier Prado 123')
    cy.get('#permanentAddress').type('Av. Defensores de Morro #123')
    cy.get('#submit').click();
  });
})