import { TODO_FIELD, TODO_URL } from "../config";

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