# NLW Spacetime 2023

Esse projeto foi desenvolvido baseado no NLW Spacetime 2023 que consiste em uma aplicação web e mobile para a criação de um feed de memórias.

## 🚀 Começando

Primeiro passo é clonar o repositório:

```
git clone git@github.com:lucas-tannus/nlw2023.git
```

O repositório está dividido em 3 pastas, uma para cada serviço:

* **server**: back-end da aplicação
* **web**: front-end web da aplicação
* **mobile**: front-end mobile da aplicação 

### 📋 Pré-requisitos

É necessário ter instalado pelo menos a versão 12.22.0 do **Node.js**.

Caso não tenha o Node instalado ainda de uma olhada na [documentação](https://nodejs.org/en/download).

> Para executar a aplicação mobile é necessário ter um dispositivo conectado. Para isso, pode ser utilizado o seu dispositivo físico, um similador Android ou IOS.

A aplicação é autenticada usando o OAuth. Siga os seguintes passos:

1. A aplicação é autenticada usando o login do Github então, para configurar a autenticação deve ser criada uma aplicação no [OAuth Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app) do Github. Obs: A aplicação web e mobile devem possuir OAuth Apps diferentes.
2. Adicione o client id (**GITHUB_CLIENT_ID**) e o client secret (**GITHUB_CLIENT_SECRET**) nas variáveis de ambiente do servidor.
3. Adiciona o client id (**NEXT_PUBLIC_GITHUB_CLIENT_ID**) nas variáveis de ambiente da aplicação web.

### 🔧 Instalação

Para instalar cada serviço basta acessar a pasta e executar o seguinte comando:

```
npm i
```

Para inicializar o servidor basta acessar a pasta `server` e executar:  

```
npm run dev
```
Por padrão a aplicação sobe na porta 3333 então, para acessar o servidor, basta chamar http://localhost:3333.

Para inicializar a aplicação web, acesse a pasta `web` e execute:
```
npm run dev
```
Por padrão a aplicação sobe na porta 3000 então, para acessar, basta chamar http://localhost:3000.

Para inicializar a aplicação mobile, acesse a pasta `mobile` e execute:
```
npm start
```
Após isso, escolha em qual dispositivo deseja executar a aplicação.

## 🛠️ Construído com

* [Node.js + Fastify](https://www.fastify.io/docs/latest/) - Framework servidor usado
* [React + Next.js](https://nextjs.org/docs) - Framework web usado
* [React Native + Expo](https://docs.expo.dev/) - Framework mobile usado
* [Tailwind](https://v2.tailwindcss.com/docs) - Lib de estilização de CSS
* [Prisma](https://www.prisma.io/docs) - ORM usado

## ✒️ Autores

* **Lucas Tannús Vieira** - [lucas-tannus](https://github.com/lucas-tannus)
* **Diego Fernandes** - [diego3g](https://github.com/diego3g)

## 🎁 Expressões de gratidão

* Agradecimento à [Rockeseat](https://www.rocketseat.com.br/) por ter disponibilizado esse projeto incrível que ajuda a desenvolver profissionalmente milhares de pessoas.


---
com 🧡  por [Lucas Tannús](https://github.com/lucas-tannus) 😊
