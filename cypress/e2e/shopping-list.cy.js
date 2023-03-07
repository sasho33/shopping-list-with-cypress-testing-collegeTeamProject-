describe('shopping list', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should add to list', () => {   

    cy.get('.form-control').type('Pizza');
    cy.get('#addToList').click();
    cy.get('.form-control').type('Bread');
    cy.get('#addToList').click();
    // cy.get('.todo-list-element').then((element) => {
    // element.
    // });
  });

  it('deletes items from list', () => {
    //adds milk to list then clicks delete
    cy.get('.form-control').type('Milk');
    cy.get('#addToList').click();
    cy.get(':nth-child(1) > .delete-btn')
    .click();
    //the list item should no longer exist
    cy.get(':nth-child(1) > .delete-btn').should('not.exist')
  })

  it('deletes only the selected one from list', () => {
    //adds milk and carrots to list then clicks delete at carrot
    cy.get('.form-control').type('Milk');
    cy.get('#addToList').click();
    cy.get('.form-control').type('Carrots');
    cy.get('#addToList').click();
    cy.get(':nth-child(2) > .delete-btn')
    .click();
    // carrots should not exist and milk should
    cy.get(':nth-child(2) > .delete-btn').should('not.exist')
    cy.get(':nth-child(1) > .delete-btn').should('exist')
  })
});

