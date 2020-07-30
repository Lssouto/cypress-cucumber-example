import { ApiActor } from '../../../src/models/api';
import { getTodoAuthList, getAuthToken } from '../../../src/tasks/api';
import { responseStatus } from '../../../src/questions/api';
import { StoreService } from '../../../src/services/store';

let apiActor;

Given('que eu estou autenticado', () => {
    apiActor = new ApiActor('auth')
    apiActor.wasAbleTo(getAuthToken, apiActor);
    cy  .get('@auth')
        .then( response => {
            StoreService.token = response.body.token;
        });
})

Given('que o actor é {string}', (_actor) => {
    apiActor = new ApiActor(_actor);
})

When('o actor acessa a rota de afazeres', () => {
    apiActor.attemptsTo(getTodoAuthList, apiActor);
})

Then('ele ve a lista de seus afazeres', () => {
    cy  .get('@todo-auth-list')
        .then(response => {
            apiActor.shouldSeeThat(responseStatus, { response, status: 200 });
        })
})

// Given('que o actor é inexistente', () => {
//     apiActor = new ApiActor('auth');
// })

// Then('ele recebe uma resposta com status 404', () => {
//     cy  .get('@todo-auth-list')
//         .then(response => {
//             apiActor.shouldSeeThat(responseStatus, { response, status: 404 });
//         })
// })