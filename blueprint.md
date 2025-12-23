
# Blueprint do Projeto Artesão

## Visão Geral

Este projeto é um site de portfólio para um artesão, projetado para ser uma vitrine elegante e moderna de suas criações. O site é responsivo e construído com HTML, CSS e JavaScript, sem o uso de frameworks, para garantir um carregamento rápido e uma experiência de usuário fluida. O design é limpo, com foco em imagens de alta qualidade dos produtos, e a navegação é intuitiva para facilitar a exploração da galeria, informações sobre o artista e contato.

## Estilo e Design

*   **Layout:** Moderno e limpo, com bastante espaço em branco para destacar o conteúdo.
*   **Cores:** Uma paleta de cores quentes e terrosas, com um laranja vibrante (`#ff6f61`) como cor de destaque para botões e links importantes.
*   **Tipografia:** Fontes sem serifa para garantir legibilidade e uma aparência contemporânea.
*   **Imagens:** Grandes e de alta qualidade para mostrar os detalhes do trabalho artesanal.
*   **Responsividade:** Totalmente adaptável a dispositivos móveis e desktops.

## Funcionalidades Implementadas

*   **Página Inicial:** Uma seção de herói com uma imagem impactante, um slogan e botões de chamada para ação. Inclui também uma prévia das criações recentes e uma introdução interativa sobre o artista usando um carrossel.
*   **Navegação:** Um cabeçalho fixo com um logotipo e links para as páginas Início, Galeria, Sobre e Contato.
*   **Logo:** Composto por uma imagem e o nome "Artesão" ao lado, presente em todas as páginas.
*   **Rodapé:** Inclui navegação, informações de contato e links para redes sociais.
*   **Página de Galeria:** Exibe todas as criações do artesão em um layout de grade.
*   **Página Sobre:** Conta a história do artesão com mais detalhes através de um carrossel interativo.
*   **Página de Contato:** Um formulário para os visitantes enviarem mensagens e informações de contato do artista.
*   **Componente de Carrossel:** Um Web Component reutilizável (`<carousel-component>`) que apresenta conteúdo em slides com navegação e um contador de páginas. Utilizado na página "Sobre" e na página Inicial.

## Plano de Alteração Atual

**Objetivo:** Substituir a seção estática "Sobre o Artista" na página inicial por um carrossel interativo.

**Passos:**

1.  **Reutilização do Componente:** Utilizei o `<carousel-component>` já existente e o inseri no `index.html`.
2.  **Atualização do Conteúdo:** Substituí o texto estático e o botão "Saiba Mais" pelo carrossel, preenchendo-o com os mesmos slides da história do Elias presentes na página "Sobre".
3.  **Carregamento do Módulo:** Garanti que o `main.js` fosse carregado como um módulo (`type="module"`) no `index.html` para que a importação do componente funcionasse corretamente.
4.  **Documentação:** Atualizei o `blueprint.md` para refletir a nova funcionalidade na página inicial.
