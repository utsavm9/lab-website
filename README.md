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
* worker_id: `1234` lastname: `Smith`, firstname: `John`, password: `p1`
* worker_id: `5678` lastname: `George`, firstname: `Peter`, password: `p2`

## Authors
* Parham Hajzavar
* Frank Xing
* Utsav Munendra