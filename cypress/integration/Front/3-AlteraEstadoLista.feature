Feature: Altera estado de um item na lista de compra

    Scenario Outline: Verifica se o estado do item foi alterado
        Given Eu acesso o site e preencho a lista com os items a seguir "<items>" 
        When Eu altero o estado dos items "<done>" para completo
        Then O numero de items que falta diminui "<items>" "<done>"

Examples:
    | items | done |
    | Maçã, Uva, Laranja, Limão | Uva, Limão |
    | Macarrão, Hamburguer  | Hamburguer |
    