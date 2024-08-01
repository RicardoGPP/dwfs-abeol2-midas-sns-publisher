# Midas - SNS Publisher

Este projeto faz parte do trabalho da disciplina de Arquitetura de Backend do curso de pós-graduação em Desenvolvimento Web FullStack da PUC Minas. Se trata de um pequeno servidor HTTP para publicação de mensagens no tópico de [Scrapper](https://github.com/RicardoGPP/dwfs-abeol2-midas-scrapper-lambda).

## Principais arquivos do projeto

 - [app.js](https://github.com/RicardoGPP/dwfs-abeol2-midas-sns-publisher/blob/main/app.js): Registra endpoints e inicia o servidor;
 - [sns-publisher.mjs](https://github.com/RicardoGPP/dwfs-abeol2-midas-sns-publisher/blob/main/src/publisher/sns-publisher.mjs): Permite a publicação de uma mensagem no tópico;
 - [constants.mjs](https://github.com/RicardoGPP/dwfs-abeol2-midas-sns-publisher/blob/main/src/util/constants.mjs): Contém constantes de configuração da AWS.

## Como usar

Há apenas um endpoint para publicação das mensagens:

 - **[POST] /**: envia uma requisição ao servidor com a URL da NFC-e a ser feito o scrapping.

O corpo da requisição deve seguir este formato:

```
{
  "url": "https://endereco-da-nfce.com.br"
}
```

Se a publicação foi bem sucedida, você receberá uma resposta similar a esta:

```
{
  "$metadata": {
    "httpStatusCode": 200,
    "requestId": "22d26d06-408f-56df-bb14-3220578e98d8",
    "attempts": 1,
    "totalRetryDelay": 0
  },
  "MessageId": "e28d7ddc-9977-5e43-a987-22fa8e76b044",
  "SequenceNumber": "10000000000000004000"
}
```
