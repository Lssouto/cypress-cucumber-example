Feature: Preenche lista de compras

    Scenario Outline: Verifica se existem 4 items na lista
        Given Eu acesso o site
        When Eu adiciono "<items>" na lista
        Then A lista apresenta os 4 items digitados

Examples:
    | items |
    | Maçã, Uva, Laranja, Limão  |
    