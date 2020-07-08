import { TODO_FIELD, TODO_URL, TODO_LIST, TODO_COMPLETED } from "../config";

export const addItemToList = (todoText) => {
    cy.get(TODO_FIELD).type(todoText + '{enter}');
}

export const addItemsToList = (items) => {
    const _normalizedItems = Array.isArray(items) ? items : normalizeArray(items);
    _normalizedItems.forEach(item => {
        addItemToList(item);
    });
}

export const normalizeArray = (stringArray) => {
    return stringArray.split(', ');
}

export const start = () => {
    cy.visit(TODO_URL);
}

export const startWithItemsList = (items) => {
    start();

    const _normalizedItems = Array.isArray(items) ? items : normalizeArray(items);
    addItemsToList(_normalizedItems);
}

export const changeItemState = (items) => {
    const _normalizedItems = Array.isArray(items) ? items : normalizeArray(items);
    _normalizedItems.forEach(item => {
        cy.get(TODO_LIST)
            .contains(item)
            .parent()
            .find('input')
            .click()
    });
}

export const clickCompleted = () => {
    cy.get(TODO_COMPLETED).click();
} 