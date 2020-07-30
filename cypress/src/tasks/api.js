import { StoreService } from "../services/store";

export const getAuthToken = (actor) => {
    cy.request({
        failOnStatusCode: false,
        method: 'POST',
        url: `${actor.baseUrl}/authenticate`,
        body: actor.credentials
    }).as('auth');
}

export const getTodoList = (actor) => {
    cy.request({
        failOnStatusCode: false,
        method: 'GET',
        url: `${actor.baseUrl}/todo/list`,
        qs: {
            user: actor.name.toLowerCase()
        }
    }).as('todo-list');
}

export const getTodoAuthList = (actor) => {
    cy.request({
        failOnStatusCode: false,
        method: 'GET',
        url: `${actor.baseUrl}/todo/auth/list`,
        headers: {
            Auth: `Bearer ${StoreService.token}`
        },
        qs: {
            user: actor.name.toLowerCase()
        }
    }).as('todo-auth-list');
}
