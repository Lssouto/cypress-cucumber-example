import { TODO_LIST, TODO_COUNT } from '../config'; 
import { normalizeArray } from '../tasks/todo-tasks';

export const sizeIs = (expectedNumberOfTodos) => {
    cy.get(TODO_LIST).should('have.length', expectedNumberOfTodos);
}

export const contentsHave = (items) => {
    const _normalizedItems = Array.isArray(items) ? items : normalizeArray(items);
    _normalizedItems.forEach(item => {
        cy.get(TODO_LIST).should('contain', item);
    });
}

export const checkLeftItems = (qtd) => {
    cy.get(TODO_COUNT).contains(qtd);
}