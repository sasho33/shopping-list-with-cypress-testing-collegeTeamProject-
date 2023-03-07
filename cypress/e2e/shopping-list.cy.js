describe('shopping list', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  //array of data for testing
  const data = [
    'Pizza',
    'Hot dog',
    'Butter',
    'Bread',
    'Cheeze',
    'Coffee',
    'Tea',
    'Vegetables',
    'Cookies',
  ];

  it('should add to list and contain data, after should delete every from the end of list item and not contain any data', () => {
    //adding items to list from array
    data.forEach((el) => {
      cy.get('.form-control').type(el);
      cy.get('#addToList').click();
    });
    //deleting items from the and of list
    cy.get('.todo-list-element').each(($list, $index) => {
      // checking every element in array on containing data

      cy.wrap($list.text()).should('contain', data[$index]);
    });
    data.forEach((el, i) => {
      cy.get(`:nth-child(${data.length - i}) > .delete-btn`).click();
    });
    cy.get('.todo-list-element').should('not.exist');
  });

  it('every odd checkbox should be checked and list item should be crossed', () => {
    data.forEach((el, i) => {
      cy.get('.form-control').type(el);
      cy.get('#addToList').click();

      if (i % 2 === 0) {
        cy.get(':last-child > [data-checkbox]').click(); //tick on every odd event
        cy.get(':last-child > [data-checkbox]').should('be.checked'); //item should not be checked
        cy.get('li:last-child').invoke('attr', 'style').should('contain', 'line-through'); //itemm crossed
      } else {
        cy.get(':last-child > [data-checkbox]').should('not.be.checked'); //checkbox should not be checked
        cy.get('li:last-child').should('not.contain', 'line-through'); //item not crossed
      }
    });
  });

  it('deletes items from list', () => {
    //adds milk to list then clicks delete
    cy.get('.form-control').type('Milk');
    cy.get('#addToList').click();
    cy.get(':nth-child(1) > .delete-btn').click();
    //the list item should no longer exist
    cy.get(':nth-child(1) > .delete-btn').should('not.exist');
  });

  it('deletes only the selected one from list', () => {
    //adds milk and carrots to list then clicks delete at carrot
    cy.get('.form-control').type('Milk');
    cy.get('#addToList').click();
    cy.get('.form-control').type('Carrots');
    cy.get('#addToList').click();
    cy.get(':nth-child(2) > .delete-btn').click();
    // carrots should not exist and milk should
    cy.get(':nth-child(2) > .delete-btn').should('not.exist');
    cy.get(':nth-child(1) > .delete-btn').should('exist');
  });
});
