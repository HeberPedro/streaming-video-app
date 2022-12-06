# Streaming Video App

Aplicação de streaming de vídeos com recursos de adaptação a diferentes velocidades de conexão e download de vídeo em fragmentos (chunks).

## Dependências

Para executar essa aplicação é necessário [Docker][docker], [AWS CLI][aws-cli], [Node.js v10.16][nodejs] ou superior e o [Yarn v1.13][yarn] ou superior.

## Como executar

### Preparação do ambiente

O primeiro passo para executar a aplicação será configurar o ambiente, instalando as dependências necessárias, isso pode ser feito através do comando no seu terminal:

```
yarn install
make convert-mp4-to-hls
```

### Subir ambiente de desenvolvimento local

Execute o docker compose com os container necessários:

```bash
docker-compose up -d
```

E para realizar o start no ambiente aws local, rode o comando:

```bash
make aws-stack
```

### Executando

Para subir a aplicação basta rodar o seguinte comando:

```bash
yarn start
```

## Variáveis de ambiente

Segue abaixo uma listagem das variáveis de ambiente e configure as variáveis conforme a execução necessária, por exemplo, apontando a url de um endpoint S3 para alguma instância local.

**Ps**: Em ambiente de desenvolvimento local temos um exemplo válido para ser utilizado no arquivo `.env-dev`

**Ps 2**: o `*` indica a obrigatoriedade da variável de ambiente

### Variáveis da aplicação

| Nome                         | Descrição                                            | Valor padrão |
| ---------------------------- | ---------------------------------------------------- | ------------ |
| REACT_APP_S3_ENDPOINT_URL\*  | Endpoint utilizado na conexão com o S3               | N/A          |
| REACT_APP_S3_BUCKET_VIDEOS\* | Nome do bucket onde ficam os vídeos utilizados       | N/A          |
| SKIP_PREFLIGHT_CHECK         | Verificação de comprovação da árvore de dependências | true         |

## Referências

- [Browser Codec Compatibility](https://gist.github.com/Vestride/278e13915894821e1d6f)
- [Netflix JavaScript Talks - Making Bandersnatch](https://www.youtube.com/watch?v=WLqc0EX8Bmg)

[docker]: https://www.docker.com/products/docker-desktop/
[aws-cli]: https://aws.amazon.com/pt/cli/
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
