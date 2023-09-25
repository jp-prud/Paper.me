<h1 align="center">Paper.me 📖</h1>

<p align="center">Expandindo Horizontes Acadêmicos com Aprendizado em Desenvolvimento Mobile 📱  <br> <strong>Desenvolvido</strong> com React Native, TypeScript, Restyle, DDD, React Query, Zod e mais.
</p>

<div align="center"><img src="https://i.imgur.com/sbgHAvk.jpg" title="Paper.me" alt="Paper.me" height="720"/></div>

## Introdução

A disseminação do conhecimento científico é fundamental para o avanço da educação e pesquisa nas universidades. No entanto, muitas vezes, a complexidade na busca e compartilhamento de artigos científicos pode ser um obstáculo para os estudantes universitários. Pensando nisso, desenvolvemos o "Paper.me", uma plataforma inovadora que simplifica a leitura e compartilhamento de artigos científicos, criada especialmente para a comunidade universitária.

## Objetivo

O objetivo do projeto "Paper.me" é oferecer uma plataforma intuitiva e colaborativa que facilite o acesso a artigos científicos e promova o compartilhamento de conhecimento entre estudantes universitários. Com o "Paper.me", os estudantes poderão acessar uma vasta coleção de artigos científicos diretamente da palma de suas mãos, por meio de dispositivos móveis ou computadores. Além disso, a plataforma permitirá que os estudantes compartilhem seus próprios projetos e pesquisas com outros membros da faculdade de forma rápida e eficiente.

## Funcionalidades

Principais funcionalidades do "Paper.me":

| Funcionalidade                                       | Descrição                                                                                                                         |
|------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Acesso simplificado a artigos científicos            | Os estudantes podem buscar e acessar facilmente artigos científicos de diversas áreas de conhecimento, tornando a pesquisa mais eficaz. |
| Compartilhamento de projetos e pesquisas             | Os usuários podem fazer upload de seus próprios projetos e pesquisas, tornando-os acessíveis para outros membros da comunidade acadêmica. |
| Colaboração e discussão                              | A plataforma permite comentários e discussões sobre os artigos e projetos, incentivando o debate e a troca de ideias entre os estudantes. |
| Notificações personalizadas                          | Os usuários recebem notificações sobre novos artigos relevantes para suas áreas de interesse, mantendo-os atualizados sobre os últimos desenvolvimentos em suas áreas de estudo. |
| Gerenciamento de biblioteca pessoal                   | Os estudantes podem criar bibliotecas pessoais de artigos e projetos favoritos para referência futura.                               |

## Instalação

Para realizar a instalação do projeto, siga os passos abaixo:

```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/jp-prud/Paper.me.git

# Acesse a pasta do projeto
$ cd Paper.me

# instale as dependencias
$ yarn install
      ou
$ npm install

# Inicie o Projeto
$ yarn start
      ou
$ npm run start
```

## Conectando localmente com a API

Caso optar por rodar o projeto localmente, siga o tutorial da [API](https://github.com/jp-prud/Paper.me-api).

Para que funcione no Android, você precisa mapear a porta do da sua máquina para a do emulador. Quando o emulador estiver aberto basta rodar o comando abaixo:
```
adb reverse tcp:3333 tcp:3333
```

Além disso, algum sistemas operacionais não conseguem rodar com o endereço "localhost",  mas basta trocar para o IP local da API. No me caso é o endereço `http://127.0.0.1:3333`. Você encontra esse endereço após rodar o comando yarn dev no projeto da API.

<div align="center">
  <img src="https://i.imgur.com/mlRD4mk.png"/>
</div>
