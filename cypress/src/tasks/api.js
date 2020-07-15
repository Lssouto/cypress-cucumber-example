export const makeAuthRequest = (actor) => {
    cy.request({
        failOnStatusCode: false,
        method: 'POST',
        url: `${actor.baseUrl}/authenticate`,
        body: actor.credentials
    }).as('auth');
}
