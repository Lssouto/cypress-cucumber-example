describe('Procura comida', () => {
    it('Desktop', () => {
        cy.visit('https://www.google.com');
        cy.get('input[name="q"]').type('miojo{ENTER}');

        cy.get('.kno-ecr-pt.PZPZlf.gsmt.mfMhoc.EaHP9c').should('contain', 'Macarrão');
    })

    it('Mobile', () => {
        cy.viewport(420, 600);
        cy.visit('https://www.google.com');
        cy.get('input[name="q"]').type('miojo{ENTER}');
        cy.get('.kno-ecr-pt.PZPZlf.gsmt.mfMhoc.EaHP9c').should('contain', 'Macarrão');
    })
})
