#Jogo da Memória

Um jogo da memória interativo desenvolvido com HTML, CSS e JavaScript puro, com sistema de timer e armazenamento de recorde utilizando localStorage.

O objetivo é simples: encontrar todos os pares de cartas no menor tempo possível.

#Demonstração

https://memorygame-sandy-alpha.vercel.app/

#Funcionalidades

 Geração dinâmica das cartas

 Embaralhamento aleatório a cada partida

 Timer automático (inicia no primeiro clique)

 Sistema de melhor tempo salvo no navegador

 Modal de finalização com resultado da partida

 Botão para reiniciar o jogo

 Persistência do recorde usando localStorage

 Layout responsivo e animação de flip nas cartas

#Tecnologias Utilizadas

HTML5

CSS3

JavaScript (Vanilla JS)

Google Fonts (Fonte Underdog)

#Como Funciona

O array de imagens é duplicado para formar os pares.

As cartas são embaralhadas usando sort() com Math.random().

O jogo controla:

Primeira carta clicada

Segunda carta clicada

Bloqueio do tabuleiro durante comparação

Quando todos os pares são encontrados:

O timer para

O modal exibe o tempo final

O sistema verifica se foi um novo recorde

#Lógica Principal
🔹 Controle de Estado

firstCard

secondCard

lockBoard

matchedPairs

🔹 Timer

Inicia no primeiro clique

Atualiza a cada segundo com setInterval

É interrompido ao finalizar o jogo

🔹 Recorde

Armazenado no localStorage

Comparado automaticamente ao final da partida

#Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/jogo-da-memoria.git

Abra o arquivo index.html no navegador.

Ou simplesmente abra o projeto em um servidor local (ex: Live Server do VS Code).

Desenvolvido por

Larissa Tomé Mussoi
