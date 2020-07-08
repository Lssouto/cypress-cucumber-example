import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { startWithItemsList, changeItemState } from "../../src/tasks/todo-tasks";
import { checkLeftItems } from "../../src/questions/todo-questions";

Given('Eu acesso o site e preencho a lista com os items a seguir {string}', (items) => {
    startWithItemsList(items.split(', '));
});

When('Eu altero o estado dos items {string} para completo', (items) => {
    changeItemState(items.split(', '));
});

Then('O numero de items que falta diminui {string} {string}', (items, doneItems) => {
    const itemsLength = items.split(', ').length;
    const itemsDoneLength = doneItems.split(', ').length;
    checkLeftItems(itemsLength - itemsDoneLength);
});