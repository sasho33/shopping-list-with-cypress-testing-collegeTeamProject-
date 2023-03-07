describe('template spec', () => {
  it('should visit', () => {
    cy.visit('/');

    cy.get('.form-control').type('Pizza');
    cy.get('#addToList').click();
    cy.get('.form-control').type('Bread');
    cy.get('#addToList').click();
    // cy.get('.todo-list-element').then((element) => {
    // element.
    // });
  });
});
