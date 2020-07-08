import { TODO_LIST, TODO_COUNT } from '../config'; 

export const sizeIs = (expectedNumberOfTodos) => {
    cy.get(TODO_LIST).should('have.length', expectedNumberOfTodos);
}

export const contentsHave = (items) => {
    items.forEach(item => {
        cy.get(TODO_LIST).should('contain', item);
    });
}

export const checkLeftItems = (qtd) => {
    cy.get(TODO_COUNT).contains(qtd);
}