# Hello World - Chat em Tempo Real

## Descrição
Hello World 2 é um sistema de chat em tempo real desenvolvido em **Ruby on Rails 8.1.1** utilizando **ActionCable** para comunicação WebSocket.  
O projeto permite criar múltiplos chats, enviar mensagens em tempo real e visualizar todas as mensagens de cada chat.

## Funcionalidades
- Criação de novos chats.
- Listagem de chats existentes.
- Envio e recebimento de mensagens em tempo real.
- Interface responsiva com input de envio fixo na parte inferior.

## Pré-requisitos
- Ruby 3.4.x
- Rails 8.1.1
- SQLite3 (para desenvolvimento)
- Node.js + npm (para gerenciar JavaScript via esbuild)
- Navegador moderno (Chrome, Edge, Firefox)

## Configuração do Projeto
1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd hello_world_2
````

2. Instale as gems:

```bash
bundle install
```

3. Crie o banco de dados e rode as migrations:

```bash
rails db:create
rails db:migrate
```

4. Instale pacotes JavaScript:

```bash
npm install
```

## Executando o Projeto

1. Compile os assets com esbuild:

```bash
npx esbuild app/javascript/application.js --bundle --outdir=app/assets/builds --watch
```

2. Inicie o servidor Rails:

```bash
rails server
```

3. Abra o navegador e acesse:

```
http://localhost:3000
```

## Observações

* O projeto foi desenvolvido apenas para fins acadêmicos.
* Todo o código de front-end está em Stimulus + HTML/CSS puro, sem frameworks adicionais.

## Autores

* Victor Marques
* Hanae Rosa
