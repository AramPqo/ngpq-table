describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/example');
    cy.get('.pagination > li.active + li').click();
    cy.get('table > tbody > tr > td.id-content').contains('11');
  });
});
