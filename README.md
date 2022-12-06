# Streaming Video App

Video streaming application with adaptability features to different connection speeds and video download in fragments (chunks).

## Dependencies

To run this application you need [Docker][docker], [AWS CLI][aws-cli], [Node.js v10.16][nodejs] or higher and [Yarn v1.13][yarn] or higher.

## How to run

### Preparation of the environment

The first step to run the application will be to configure the environment, installing the necessary dependencies, this can be done using the command in your terminal:

```bash
yarn install
make convert-mp4-to-hls
```

### Upload local development environment

Run docker compose with the necessary containers:

```bash
docker-compose up -d
```

And to perform the start in the local aws environment, run the command:

```bash
make aws-stack
```

### Running

To run the application, just run the following command:

```bash
yarn start
```

## Environment variables

Below is a listing of the environment variables and configure the variables according to the necessary execution, for example, pointing the url of an S3 endpoint to some local instance.

**Ps**: In a local development environment we have a valid example to be used in the `.env-dev` file

**Ps 2**: the `*` indicates that the environment variable is mandatory

### Application variables

| Name                         | Description                                          | Default value |
| ---------------------------- | ---------------------------------------------------- | ------------- |
| REACT_APP_S3_ENDPOINT_URL\*  | Endpoint used when connecting to S3                  | N/A           |
| REACT_APP_S3_BUCKET_VIDEOS\* | Name of the bucket where the used videos are located | N/A           |
| SKIP_PREFLIGHT_CHECK         | Preflight Check of the dependency tree               | true          |

## References

- [Browser Codec Compatibility](https://gist.github.com/Vestride/278e13915894821e1d6f)
- [Netflix JavaScript Talks - Making Bandersnatch](https://www.youtube.com/watch?v=WLqc0EX8Bmg)

[docker]: https://www.docker.com/products/docker-desktop/
[aws-cli]: https://aws.amazon.com/pt/cli/
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
