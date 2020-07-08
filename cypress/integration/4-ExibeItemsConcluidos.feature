Feature: Exibe somente os itens concluídos
    
    Scenario Outline: Verifica se somente exibe itens completos
        Given que o ator é "<Actor>"
        Given O ator acessa o site e preenche a lista com os itens
        When O ator altera o estado dos itens para completo e clica em completed
        Then O ator so vizualiza os itens concluidos


Examples:
    | Actor |
    | Lucas |
    | Regiane |


    