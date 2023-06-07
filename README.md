# parko-form-feedback
## Form Feedback - Loja Parko
Este repositório contém uma aplicação de formulário de feedback desenvolvida com HTML, CSS e JavaScript, além de um servidor criado usando o framework Express.js no ambiente Node.js. A aplicação é hospedada em uma instância EC2 da AWS e utiliza um banco de dados MySQL para armazenar os feedbacks de atendimento da loja Parko.

## Objetivo
O objetivo desta aplicação é coletar feedbacks dos clientes da loja Parko sobre sua experiência de atendimento. Ao fornecer um formulário simples e intuitivo, a loja pode obter informações valiosas para melhorar seus serviços e atender às necessidades dos clientes de forma mais eficiente.

## Funcionalidades
A aplicação possui as seguintes funcionalidades:
Exibição do formulário de feedback com campos para o nome do cliente, endereço de e-mail, classificação de atendimento e um campo de comentários.
Validação dos campos do formulário para garantir que sejam preenchidos corretamente.
Armazenamento dos feedbacks enviados no banco de dados MySQL para posterior análise.

## Deploy
A aplicação também está disponível no GitHub Pages, no seguinte endereço: https://eduardoandraade.github.io/parko-form-feedback/ . Você pode acessar e utilizar a aplicação diretamente por lá.
A API de feedbacks da Parko está disponível no seguinte endereço: https://parkofeedback.info/app/feedbacks

## Segurança
Para garantir a segurança da API de feedbacks da Parko, foram implementadas as seguintes medidas:

Autenticação: A API requer autenticação para acessar os recursos. Os usuários devem fornecer um token de autenticação válido no cabeçalho das solicitações para autenticar-se e acessar os recursos protegidos.

HTTPS: A API é acessada por meio de uma conexão segura usando HTTPS. Isso garante que todos os dados enviados e recebidos sejam criptografados, protegendo contra interceptação e espionagem
