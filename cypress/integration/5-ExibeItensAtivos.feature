Feature: Exibe somente os itens ativos
    
    Scenario Outline: Verifica se somente exibe itens ativos
        Given que o ator é "<Actor>"
        Given O ator acessa o site e preenche a lista com os itens
        When O ator altera o estado dos itens para completo e clica em Actived
        Then O ator so vizualiza os itens ativos


Examples:
    | Actor |
    | Lucas |
    | Regiane |


    