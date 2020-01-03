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
    id int not null auto_increment, 
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    email varchar(255) not null,
    password varchar(60) not null,
    primary key(id),
    unique(email)
);
