
#Tabela de Classificação do Futebol Feminino

Bem-vindo ao repositório da Tabela de Classificação do Futebol Feminino! Este projeto consiste em uma aplicação web que exibe a tabela de classificação para times de futebol feminino. Através deste sistema, é possível visualizar os times, suas estatísticas, resultados de partidas e realizar atualizações quando autenticado.

O projeto é dividido em três principais componentes: a API backend, o frontend e o uso de Docker Compose para orquestrar os serviços. Abaixo, você encontrará uma descrição geral de cada parte do projeto.

##Backend API
O backend é construído usando Node.js e Express.js, e é dockerizado para simplificar o ambiente de desenvolvimento e implantação. Para lidar com o banco de dados, utilizamos o Sequelize como ORM (Object-Relational Mapping). A API oferece endpoints para obter informações sobre os times, partidas, estatísticas e autenticação.

##Endpoints da API
GET /leaderboard/home: Retorna a tabela de classificação com suas estatísticas.
POST /login: Autentica o usuário e gera um token de acesso.
GET /login/role: Recebe um token gerado no login e se for válido retorna a função do  usuário.
GET /matches: Retorna a lista de partidas com resultados.
POST /matches: Cria uma partida.
PATCH /matches/:id/finish: Finaliza uma partida. Deve ter a permissão necessária.
PATCH /matches/:id: Atualiza o resultado de uma partida. Deve ter a permissão necessária.
GET /teams: Retorna todos os times.
GET /teams/:id: Retorna o time com o id desejado.

##Frontend
O frontend é uma aplicação web que consome os dados fornecidos pela API backend. Ele exibe a tabela de classificação, resultados de partidas e fornece uma interface para atualizar os resultados das partidas quando o usuário está autenticado.

##Docker Compose
O Docker Compose é utilizado para simplificar o processo de configuração e implantação do projeto. Ele orquestra os serviços do backend, frontend e banco de dados em containers separados, permitindo uma configuração consistente e rápida para ambientes de desenvolvimento e produção.

##Instruções de Uso
- Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
- Clone este repositório: git clone https://github.com/seu-usuario/tabela-futebol-feminino.git
- Navegue até o diretório clonado: cd tabela-futebol-feminino
- Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente necessárias.
- Instale as dependências [Caso existam]: npm install
- Execute docker-compose up para iniciar a aplicação. Isso iniciará os serviços do backend, frontend e banco de dados.
- Acesse a aplicação frontend em seu navegador: http://localhost:3000
- Lembre-se de configurar corretamente as variáveis de ambiente no arquivo .env para a correta operação da aplicação.

Este é um projeto de exemplo para demonstrar o funcionamento de uma tabela de classificação do futebol feminino com integração entre frontend e backend utilizando Docker Compose. Sinta-se à vontade para explorar, modificar e expandir conforme suas necessidades.
