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
* `create_schema.sql`: updated and added new tables for each aspect outlined in the design
* `test_data`: test for inserting data into the tables

## Test Data
* worker_id: `1234`, firstname: `Frank`, lastname: `Xing`, password: `1`
* worker_id: `5678`, firstname: `Parham`, lastname: `Hajzavar`,  password: `2`

## Code Formatting Settings
Use VSCode Extension Prettier with these settings from File > Preferences > Settings > Open Settings (JSON) icon:
```
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"prettier.tabWidth": 4,
"prettier.printWidth": 120,
```

## Authors
* Parham Hajzavar
* Frank Xing
* Utsav Munendra