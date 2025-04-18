describe('My First Test', () => {
  it('Visits the app', () => {
    cy.visit('/');
    expect(true).to.equal(true);
  });
});
