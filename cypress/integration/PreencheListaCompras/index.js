import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { start, addItemToList, addItemsToList } from '../../src/tasks/todo-tasks';
import { sizeIs, contentsHave } from "../../src/questions/todo-questions";

Given('Eu acesso o site', () => {
    start();
});

When("Eu adiciono {string} na lista", (itens) => {
    addItemsToList(itens.split(', '));
});

Then('A lista apresenta os 4 items digitados', () => {
   sizeIs(4);
   contentsHave(['Maçã', 'Uva', 'Laranja', 'Limão']);
});