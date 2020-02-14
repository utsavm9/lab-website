-- Creates an empty table structure for the node app to use

-- Prerequisites:
--   MySQL Server is running
--   The database experiment_data is available. If not, create using CREATE DATABASE experiment_data;

-- Run this script using the command:
--    cat create_schema.sql | mysql -u root
create database experiment_data ;
use experiment_data;
-- User's table
create table users (
    primary key(worker_id),
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    worker_id varchar(255) not null,
    password_hash varchar(60) not null,
    unique(worker_id)
);
-- User's experiments
create table users_experiments (
    primary key(worker_id),
    worker_id varchar(255) not null,
    experiment_id INT not null,
    trial_id INT not null
);
-- Experiment's Questions
create table experiments_questions (
    primary key(experiment_id),
    experiment_id INT not null,
    question_order INT not null,
    question_id INT not null
);
-- Responses
create table responses (
    primary key(trial_id),
    trial_id INT not null,
    question_id INT not null,
    start_time TIME (0) not null,
    end_time TIME (0) not null,
    response varchar(255) 
);
-- Questions
create table questions (
    primary key(question_id),
    question_id INT not null,
    question_type varchar(255) not null
);
-- Multiple Choice
create table mcq (
    primary key(question_id),
    question_id INT not null,
    question varchar(255) not null,
    choice_1 varchar(255),
    choice_2 varchar(255),
    choice_3 varchar(255),
    choice_4 varchar(255) 
);
-- Image
create table image (
    primary key(question_id),
    question_id INT not null,
    question varchar(255) not null,
    image_type varchar(255) not null,
    show_for TIME (0) not null,
    max_time TIME (0) not null
);
-- Text 
create table text (
    primary key(question_id),
    question_id INT not null,
    question varchar(255) not null,
    hint varchar(255)
);