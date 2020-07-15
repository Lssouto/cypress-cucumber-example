Given(`Acesso o site do google`, () => {
  cy.visit('https://www.google.com');
});

When('Eu procuro miojo', () => {
    cy.get('input[name="q"]').type('miojo{ENTER}');
});

Then('Entao ele acha comida', () => {
    cy.get('.kno-ecr-pt.PZPZlf.gsmt.mfMhoc.EaHP9c').should('contain', 'Macarrão');
});