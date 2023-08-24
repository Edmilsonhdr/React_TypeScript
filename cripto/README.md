## Sobre este Projeto de Criptomoedas em React com TypeScript

Olá! Neste projeto, você encontrará uma aplicação que desenvolvi usando React e TypeScript para mostrar informações sobre criptomoedas, usando a API CoinLib. Eu me aprofundei em diversos aspectos do ecossistema React e integração do TypeScript para criar essa aplicação.

### O que Explorei e Aprendi

- **Navegação com React Router:** Para navegar entre diferentes partes da aplicação, utilizei o React Router. Usei o `useNavigate` para facilitar a navegação e o `useParams` para acessar informações das rotas.

- **Estilização com CSS Modules:** A estilização dos componentes foi feita com CSS Modules, uma técnica que evita conflitos de nomes de classes e deixa os estilos mais organizados.

- **Ícones com ReactIcon:** Integrei ícones de forma simples usando a biblioteca `react-icons`, especialmente os ícones do conjunto `BiSearch`.

- **Gerenciamento de Estado com `useState`:** Para lidar com mudanças de estado, como entrada do usuário e indicadores de carregamento, utilizei o `useState`.

- **Efeitos com `useEffect`:** O `useEffect` foi essencial para tratar efeitos colaterais, como fazer requisições à API. Usei ele tanto no componente principal para buscar uma lista de criptomoedas quanto no componente de detalhes para obter informações sobre uma criptomoeda específica.

- **Obtenção de Dados com `fetch`:** Utilizei a função `fetch` para obter dados da API CoinLib, garantindo que as respostas fossem tratadas como JSON para facilitar o uso.

- **Formatação de Dados:** Deixei os dados da API mais amigáveis formatando valores de moeda com `Intl.NumberFormat`, o que também melhorou a experiência do usuário.

- **Roteamento e Navegação:** A aplicação tem navegação entre diferentes visualizações, permitindo que você busque criptomoedas específicas e veja informações detalhadas sobre elas.

### Tecnologias Usadas

- React
- TypeScript
- React Router
- CSS Modules
- `react-icons`
- Uso da API `fetch` para obter dados

### Como Usar

1. Clone este repositório para a sua máquina.
2. Acesse a pasta do projeto.
3. Execute `npm install` para instalar as dependências.
4. Rode `npm run dev` para iniciar o servidor de desenvolvimento.
5. Acesse a aplicação no seu navegador .

Sinta-se à vontade para explorar e customizar a aplicação, usando os conceitos que aprendi para criar projetos React incríveis!