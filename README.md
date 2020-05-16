# Deno REST API

i'am trying to make a simple REST API with Deno & Oak module. In case i'am not using database, but i'am just
using Array. hope this sample helping you to make a REST API.

## run the app

`deno run --allow-net server.ts`

## routes

| Route                    | Description          |
| ------------------------ | -------------------- |
| GET /user                | return all the users |
| GET /user/{fullname}     | return a user        |
| POST /user               | add a user           |
| PUT /user/{fullname}     | update a user        |
| DELETE /books/{fullname} | delete a user        |
