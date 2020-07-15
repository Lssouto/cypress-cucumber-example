import { ApiActor } from '../../../src/models/api';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { makeAuthRequest } from '../../../src/tasks/api';
import { responseStatus, NaNull } from '../../../src/questions/api';

let apiActor;

Given('que o ator é {string}', (_actor) => {
    apiActor = new ApiActor(_actor);
})

When('ele tenta acessar o sistema usando suas credenciais corretas', () => {
    apiActor.attemptsTo(makeAuthRequest, apiActor);
})

Then('ele recebe o token de autenticação', () => {
    cy.get('@auth').then((response) => {
        apiActor.shouldSeeThat(responseStatus, ({ response, status: 200 }));
        apiActor.shouldSeeThat(NaNull, response.body.token)
    })
})

When('ele tenta acessar com credenciais incorretas', () => {
    const { baseUrl } = apiActor;
    apiActor.attemptsTo(makeAuthRequest, { baseUrl, credentials: null });
})

Then('ele recebe o status 401', () => {
    cy.get('@auth').then((response) => {
        apiActor.shouldSeeThat(responseStatus, ({ response, status: 401 }));
    })
})