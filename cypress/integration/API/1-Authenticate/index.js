import { ApiActor } from '../../../src/models/api';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { getAuthToken } from '../../../src/tasks/api';
import { responseStatus, NaNull } from '../../../src/questions/api';
import { storeService } from '../../../src/services/store';

let apiActor;

Given('que o ator é {string}', (_actor) => {
    apiActor = new ApiActor(_actor);
})

When('ele tenta acessar o sistema usando suas credenciais corretas', () => {
    apiActor.attemptsTo(getAuthToken, apiActor);
})

Then('ele recebe o token de autenticação', () => {
    cy.get('@auth').then((response) => {
        apiActor.shouldSeeThat(responseStatus, ({ response, status: 200 }));
        apiActor.shouldSeeThat(NaNull, response.body.token);
        storeService.token = response.body.token;
    })
})

When('ele tenta acessar com credenciais incorretas', () => {
    const { baseUrl } = apiActor;
    apiActor.attemptsTo(getAuthToken, { baseUrl, credentials: null });
})

Then('ele recebe o status 401', () => {
    cy.get('@auth').then((response) => {
        apiActor.shouldSeeThat(responseStatus, ({ response, status: 401 }));
    })
})