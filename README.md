# Avaliador de Redações

## Descrição do Projeto
Este projeto tem como finalidade implementar, na prática, tecnologias de rotas (Vue Router) e uma estrutura de dados diferente das demais utilizadas

## Estrutura dos dados
No banco de dados do Firebase, os dados ficam armazenados da seguinte forma
```mermaid
classDiagram
class NomeDoAutor
NomeDoAutor : +Number coerencia_redacao
NomeDoAutor : +Number compreensao_tema
NomeDoAutor : +Number direitos_humanos
NomeDoAutor : +Number escrita_formal
NomeDoAutor : +Number mecanismos_linguisticos
NomeDoAutor : +Number media_final (soma das 5 competências)
```
## Guia de Utilização
### Atribuição de Pontuação
Nesta aplicação, a redação é avaliada em 5 competências, cada uma valendo de 0 a 200 pontos e a média final é a soma dessas pontuações (formando no máximo 1000)
### Registrando um Autor
Para registrar um autor, vá até o <a target="_blank" href="https://avaliadoronline.netlify.app/#/cadastro">Formulário de Registro</a> e preencha os campos <br/>
<br/>
<img height="160px" width="160px" src="./assets/readme-assets/registerAuthor.gif"></img>

### Excluindo um Autor
Há duas formas de excluir um autor, a viabilidade dependerá da quantidade de autores na lista
#### Usando o botão de lixeira
*Recomendável utilizar quando há poucos autores registrados* <br/>

Clique no ícone de lixeira localizado após o nome do autor <br/>
<img height="70px" width="420px" src="./assets/readme-assets/deleteAuthorTrash.gif"></img>

#### Pesquisando pelo nome
*Obs.: Caso sensitivo, RegEx será adicionado posteriomente* <br/>

Digite o nome do autor no campo e clique em "Excluir Autor" (pressionar enter também funciona)
<img height="70px" width="420px" src="./assets/readme-assets/deleteAuthor.gif"></img>

## Tecnologias Utilizadas

![Framework Javascript utilizado para renderização dinâmica dos componentes](https://skills.thijs.gg/icons?i=vue,bootstrap,firebase,netlify&theme=light)
