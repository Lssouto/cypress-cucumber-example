Feature: Pegar lista de afazeres

    Scenario Outline: Pegar lista dos usuários
        Given que o actor é "<Actor>" 
        When o actor acessa a rota de afazeres
        Then ele ve a lista de seus afazeres

Examples:
    | Actor |
    | Lucas |
    | Regiane |

    Scenario: Pegar lista de usuário inexistente
        Given que o actor é inexistente 
        When o actor acessa a rota de afazeres
        Then ele recebe uma resposta com status 404