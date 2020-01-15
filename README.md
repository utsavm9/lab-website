# Lab Website for PPCL

## Repo structure
* `pages`: Front-end of the website and each page will be rendered by Next.js
* `backend`: The back-end code for maintaining the server
* `scripts`
    * `create_schema.sql`: Generate an empty database to work on
* `config.js`: Contains tweakable constants used throughout the project
* `server.js`: Starting point of the server, also contains most of the code for routing

## Other documentation

* `design.docx`: All changes to the database schema must to reflected in this document
      and the `create_schema.sql`.