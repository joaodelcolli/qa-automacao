$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sky.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Programação Sky",
  "description": "\nComo um usuário\nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "programação-sky",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "programação-sky;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 9,
  "name": "que acesso o site da sky \u003curl\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "seleciono em progração",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono a programação que está passando na hora",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido se o texto é o mesmo do modal",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "programação-sky;deve-inserir-uma-conta-com-sucesso;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 16,
      "id": "programação-sky;deve-inserir-uma-conta-com-sucesso;;1"
    },
    {
      "cells": [
        "https://www.sky.com.br/"
      ],
      "line": 17,
      "id": "programação-sky;deve-inserir-uma-conta-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 17,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "programação-sky;deve-inserir-uma-conta-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 9,
  "name": "que acesso o site da sky https://www.sky.com.br/",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "seleciono em progração",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "seleciono a programação que está passando na hora",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "valido se o texto é o mesmo do modal",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.sky.com.br/",
      "offset": 25
    }
  ],
  "location": "SkySteps.AcessoOSitedaSky(String)"
});
formatter.result({
  "duration": 29600854682,
  "status": "passed"
});
formatter.match({
  "location": "SkySteps.selecionoEmProgração()"
});
formatter.result({
  "duration": 317546020,
  "status": "passed"
});
formatter.match({
  "location": "SkySteps.selecionoAProgramaçãoQueEstáPassandoNaHora()"
});
formatter.result({
  "duration": 9611561510,
  "status": "passed"
});
formatter.match({
  "location": "SkySteps.validoSeOTextoÉOMesmoDoModal()"
});
formatter.result({
  "duration": 118896283,
  "status": "passed"
});
});