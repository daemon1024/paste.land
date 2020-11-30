<img align="right" src=https://user-images.githubusercontent.com/47106543/100612012-442e4400-3338-11eb-8eac-38a222b029e7.png height="200px">


# paste.land

[![deno version](https://img.shields.io/badge/deno-^1.5.2-lightgrey?logo=deno)](https://github.com/denoland/deno)
[![GitHub license](https://img.shields.io/github/license/daemon1024/paste.land)](/LICENSE)
[![paste.land Telegram Chat](https://img.shields.io/badge/chat-paste.land-blue?logo=telegram)](https://t.me/paste_land)
[![GitHub Actions status](https://github.com/daemon1024/paste.land/workflows/deno/badge.svg?branch=master)](https://github.com//daemon1024/paste.land/actions)

Paste tool made in deno

## Setup 

- Install [`Deno`](https://deno.land/#installation)
- Fork and Clone the repository 
```sh
git clone https://github.com/<your-username>/paste.land
```
- Move into the project folder
```sh
cd paste.land
```
- Start the server
```sh
deno run --allow-net  mod.ts
```

The output should be 
```sh
Listening on http://localhost:8000/
```

## Usage

Head over to `http://localhost:8000/` on your PC or use some API tool like curl, [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/). We will be using curl in the following examples.

- `GET /` -> Returns Hello World
```sh
curl http://localhost:8000/
```
- `GET /:id` -> Retrieve the paste with the given id as plain-text.
```sh
curl http://localhost:8000/<id>
```
- `POST /` -> Send the data in plaintext along. Will respond with a link to the paste.
```sh
curl --data "My first paste" -H "Content-Type: text/plain" -X POST http://localhost:8000/
```

