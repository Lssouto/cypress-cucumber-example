Feature: Preenche lista de compras

    Scenario Outline: Verifica se os items adicionados estão na lista
        Given Eu acesso o site
        When Eu adiciono "<items>" na lista
        Then A lista apresenta "<size>" items "<items>" digitados

Examples:
    | items | size |
    | Maçã, Uva, Laranja, Limão | 4 |
    | Macarrão, Hamburguer  | 2 |
    