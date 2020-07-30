import { ApiActor } from '../../../src/models/api';
import { getTodoList } from '../../../src/tasks/api';
import { responseStatus } from '../../../src/questions/api';

let apiActor;

Given('que o actor é {string}', (_actor) => {
    apiActor = new ApiActor(_actor);
})

When('o actor acessa a rota de afazeres', () => {
    apiActor.attemptsTo(getTodoList, apiActor);
})

Then('ele ve a lista de seus afazeres', () => {
    cy  .get('@todo-list')
        .then(response => {
            apiActor.shouldSeeThat(responseStatus, { response, status: 200 });
        })
})

Given('que o actor é inexistente', () => {
    apiActor = new ApiActor('auth');
})

Then('ele recebe uma resposta com status 404', () => {
    cy  .get('@todo-list')
        .then(response => {
            apiActor.shouldSeeThat(responseStatus, { response, status: 404 });
        })
})