<h1 align="center">Welcome to Wiser - Url Shortener 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://shortdoc.tapia.com.br" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A URL shortener created using NodeJS, Typescript, Express, PostgreSQL and NanoID. Generates a short URL that be available for 24 hours.


##### 🏠 [API](https://short.tapia.com.br)
##### 📖 [Documentation](https://short.tapia.com.br)

## How it works?
The API creates a unique hash using [NanoID](https://github.com/ai/nanoid) and saves it on database with a 24h expiration time. The alphabet used to generate the hash guarantee that 15 years needed, in order to have a 1% probability of at least one collision.

## Install

```sh
yarn install
```

## Usage

##### Development
```sh
yarn dev
```

##### Production
```sh
docker-compose up -d
```

or...

```sh
yarn build && node dist/shared/infra/http/server.js
```

## Run tests

```sh
yarn test
```

## Author

👤 **Rafael Tapia**

* Github: [@rafaatapia](https://github.com/rafaatapia)
* LinkedIn: [@rafael-tapia](https:\/\/www.linkedin.com\/in\/rafael-tapia\/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
