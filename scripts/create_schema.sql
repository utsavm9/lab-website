-- Creates an empty table structure for the node app to use

-- Prerequisites:
--   MySQL Server is running
--   The database experiment_data is available. If not, create using CREATE DATABASE experiment_data;

-- Run this script using the command:
--    cat create_schema.sql | mysql -u root
create database experiment_data;
use experiment_data;

-- User's table
create table users (
    primary key(worker_id),
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    worker_id varchar(255) not null,
    password varchar(60) not null,
    unique(worker_id)
);
