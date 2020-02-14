-- Initializes the database with test values

-- Prerequisites
--   MySQL server is running

insert into users (worker_id, lastname, firstname, password)
    values ('1234', 'Smith', 'John', '1');
insert into users (worker_id, lastname, firstname, password)
    values ('5678', 'George', 'Peter', '2');

insert into mcq (question_id, question, choice_1, choice_2, choice_3, choice_4)
    values ('2', 'What is your favorite color?', 'blue','red','orange', 'yellow');
insert into mcq (question_id, question, choice_1, choice_2, choice_3, choice_4)
    values ('1', 'What is the best UC?', 'UCLA','Berkeley','UCSB', 'UCSD');

insert into questions (question_id, question_type) 
    values ('2','t');
insert into questions (question_id, question_type) 
    values ('1','t');

insert into text (question_id, question, hint)
    values ('2', 'What is your favorite color?', 'color of sky');
insert into text (question_id, question, hint)
    values ('1', "What is the best UC?", 'it is in Westood');