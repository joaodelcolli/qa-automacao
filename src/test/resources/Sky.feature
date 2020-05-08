#language: pt
Funcionalidade: Programação Sky

  Como um usuário
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada

  Esquema do Cenario: Deve inserir uma conta com sucesso
    Dado que acesso o site da sky <url>
    E seleciono em progração
    Quando seleciono a programação que está passando na hora
    Entao valido se o texto é o mesmo do modal


  Exemplos:
    | url                     |
    | https://www.sky.com.br/ |