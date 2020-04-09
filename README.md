<img src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67">

# desafio-conceitos-node
![](https://img.shields.io/badge/NPM-6.13.4-red)
![](https://img.shields.io/badge/Node-12.16.0-green)
![](https://img.shields.io/badge/Jest-25.2.6-yellow)
![](https://img.shields.io/badge/Express-4.17.1-blue)

Esse projeto foi feito durante o bootcamp da [Rocketseat💜](https://img.shields.io/badge/Express-4.17.1-blue), com ele podemos fazer um CRUD simulando repositórios do github.

## Como usar

Antes de começar de um clone desse repositório no seu computado.
> git clone https://github.com/adilier/desafio-conceitos-node.git

Entre na pasta do projeto e instale as dependência usando o comando
> yarn

Ou

> npm install

E então rode o projeto usando o comando
> yarn dev

Se quiser ter uma experiência melhor recomendo instalar o [Insomnia](https://insomnia.rest/download/), Se nunca usou essa ferramenta a rocketseat tem um [Vídeo explicando como usar](https://www.youtube.com/watch?v=3tB0uDliS6Y).  

## Rotas
Listar todos os repositórios: GET
> http://localhost:3333/repositories

Criar um repositório: POST
> http://localhost:3333/repositories

Editar um repositório: PUT
> http://localhost:3333/repositories/:id

Deletar um repositório: DELETE
> http://localhost:3333/repositories/:id

Enviar um like para o repositório: POST
> http://localhost:3333/repositories/:id/like
