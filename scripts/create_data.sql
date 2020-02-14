-- Initializes the database with test values

-- Prerequisites
--   MySQL server is running

insert into users (worker_id, lastname, firstname, password)
    values ('1234', 'Smith', 'John', 'password11');

insert into mcq (question_id, question, choice_1, choice_2, choice_3, choice_4)
    values ('2', 'favorite color', 'blue','red','orange', 'yellow');

insert into questions (question_id, question_type) 
    values ('2','a');

insert into text (question_id, question, hint)
    values ('2', 'favorite color', 'color of sky');