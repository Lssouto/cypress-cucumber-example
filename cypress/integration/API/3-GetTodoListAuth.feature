Feature: Pegar lista de afazeres

Background: Autenticado
    Given que eu estou autenticado


    Scenario Outline: Pegar lista dos usuários
        Given que o actor é "<Actor>" 
        When o actor acessa a rota de afazeres
        Then ele ve a lista de seus afazeres

Examples:
    | Actor |
    | Lucas |
    | Regiane |