Feature: Autenticar

    Scenario: Sucesso
        Given que o ator é "auth"
        When ele tenta acessar o sistema usando suas credenciais corretas
        Then ele recebe o token de autenticação

    Scenario: Falha
        Given que o ator é "unAuth"
        When ele tenta acessar com credenciais incorretas
        Then ele recebe o status 401