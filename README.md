# Films - API


### Dependências

- Node v16.13.1
- Docker compose


### Como inciar a aplicação?

Para iniciar a aplicação, certifique-se de está utilizando a versão correta do node e ter o docker-composer devidamente instalado em sua maquina.

Agora renomeie o arquivo `.env.example` para `.env` e siga os passos abaixo.


Instale as dependências:
```
npm install
```

Suba os containers do docker:
```
docker-compose up -d
```

Execute o comando abaixo para subir as migrations:
```
npm run typeorm migration:run
```

Inicie a aplicação:
```
npm run dev
```


### Como rodar os testes?
```
npm run test
```

---

@author [Anderson Menezes](https://silk-biplane-d37.notion.site/Anderson-Menezes-5ec33939b60943c0ad2173940c61e0e6)  *( Seja melhor que ontem 👋 )*
