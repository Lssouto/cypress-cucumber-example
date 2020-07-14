import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { startWithItemsList, changeItemState, clickActived } from "../../../src/tasks/todo-tasks";
import { sizeIs, checkLeftItems } from '../../../src/questions/todo-questions';
import { TodoActor } from "../../../src/models/todo";


let actor;

Given('que o ator é {string}', (name) => {
    actor = new TodoActor(name);
});

Given('O ator acessa o site e preenche a lista com os itens', () => {
    actor.wasAbleTo(startWithItemsList, actor.buyList);
});

When('O ator altera o estado dos itens para completo e clica em Actived', () => {
    actor.wasAbleTo(changeItemState, actor.completed);
    actor.wasAbleTo(clickActived);
});

Then('O ator so vizualiza os itens ativos', () => {
    const itensLenght = ((actor.buyList.length) - (actor.completed.length)); 
    actor.shouldSeeThat(checkLeftItems, itensLenght);
});