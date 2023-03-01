<br />

<div align="center">
  <img src="https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-covers/clckmiwwu005l04w6e0vy7kwr.jpg" alt="Igma Logo" height="150px">
</div>

<br />

### Proposta

<br />

<div>
  <p>
    Escrever uma API de cadastro de clientes (Nome, CPF, nascimento), que valide a numeração do cpf utilizando o seguinte <a href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.macoratti.net%2Falg_cpf.htm%23%3A~%3Atext%3DO&data=05%7C01%7C%7C789adc9af07c47c6a63808db18f6fbda%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638131221297432015%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=7hG67%2F70j5u72ZX28G5iEdPH%2BxWhCwze7ud5b%2FW%2FtR0%3D&reserved=0">algoritmo</a>.
  </p>
</div>

<br/>

### Stack utilizada

<br />

<div>
  <img src ="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black" height="30px" alt="swagger badge">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px" alt="node.js badge"/>  
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px" alt="typescript badge"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px" alt="prisma badge">
  <img src ="https://img.shields.io/badge/postgresql-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px" alt="postgresql badge">
</div>

<br />

## Instalação e uso

<br />

<div>
  <p>
    Baixe  o arquivo zip do repositório e extraia a pasta ou clone o repositório usando o seguinte comando no terminal:
  </p>

```bash
$ git clone https://github.com/Danilosrr/Igma-API.git
```

  <p>
    Na pasta da aplicação crie um arquivo .env seguindo a estrutura do arquivo .env.example e execute estes comandos em um terminal na pasta criada:
  </p>
    
```bash
$ npm i
$ npm run prisma:deploy
$ npm run dev
```

  <p>
    Você utilizar os testes criando um arquivo .env.test seguindo o mesmo exemplo anterior e alterando o banco de dados (database).
    Execute os testes rodando o seguinte comando em um terminal na pasta criada:
  </p>

```bash
$ npm run test:integration
```

  <p>
    Pronto! você pode acessar a API no link <a href="http://localhost:4000/">http://localhost:4000/</a></br>
    também é possível acessar uma documentação detalhada da API em <a href="http://localhost:4000/doc">http://localhost:4000/doc</a> 
  </p>
</div>
