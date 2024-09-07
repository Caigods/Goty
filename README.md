## **README.md - Projeto GOTY's - Imersão DEV com Google GEMINI**

### **O que é este projeto?**

Este projeto é um simples catálogo de jogos, criado com o intuito de praticar habilidades de desenvolvimento web. Ele permite que o usuário busque por jogos através de diversos critérios, como título, gênero, plataforma e ano de lançamento.

### **Como funciona?**

1. **Interface:**
   * O usuário digita o termo de busca em um campo de texto.
   * Ao clicar no botão "Buscar" ou pressionar Enter, a aplicação procura por jogos que correspondam à pesquisa.
   * Os resultados são exibidos em uma lista, com informações como título, descrição, plataforma, ano de lançamento e um link para mais detalhes.
   * Ao digitar "Lista", todos os jogos cadastrados são exibidos.

2. **Dados:**
   * Os dados dos jogos estão armazenados em um arquivo JavaScript separado (dados.js). 
   * Cada jogo é representado por um objeto com as seguintes propriedades: título, descrição, ano de lançamento, gênero, plataformas, requisitos mínimos, requisitos recomendados, número de jogadores e link para mais informações.

3. **Busca:**
   * A busca é feita percorrendo todos os jogos e verificando se o termo de pesquisa está presente no título, descrição, plataforma ou gênero do jogo.
   * A busca não diferencia maiúsculas de minúsculas.

### **Tecnologias Utilizadas:**

* **HTML:** Estrutura da página web.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica da aplicação, incluindo a busca e a renderização dos resultados.
