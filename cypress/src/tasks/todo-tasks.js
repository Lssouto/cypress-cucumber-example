import { TODO_FIELD, TODO_URL, TODO_LIST } from "../config";

export const addItemToList = (todoText) => {
    cy.get(TODO_FIELD).type(todoText + '{enter}');
}

export const addItemsToList = (items) => {
    items.forEach(item => {
        addItemToList(item);
    });
}

export const start = () => {
    cy.visit(TODO_URL);
}

export const startWithItemsList = (items) => {
    start();

   addItemsToList(items);
}

export const changeItemState = (items) => {
    items.forEach(item => {
        cy.get(TODO_LIST)
            .contains(item)
            .parent()
            .find('input')
            .click()
    });
}