-- Initializes the database with test values
use experiment_data;

insert into users (worker_id, lastname, firstname, password_hash) 
    values ('1234', 'Terry', 'John', '$2b$10$BWUMJY9Y2PDXhIfe6q57Nu5RMLVsMuys90CamIldJSSIsq3JEK3CC');
insert into users (worker_id, lastname, firstname, password_hash) 
    values ('5678', 'Lampard', 'Frank', '$2b$10$TQTjr.O8xO8xKtrI/q4ydutdZJe/ouLHH.edf6N/mzLRNDJnmORDy');

insert into questions (question_id, question_type)
    values ('1', 'm');
insert into questions (question_id, question_type)
    values ('2', 'm');
insert into questions (question_id, question_type)
    values ('3', 't');
insert into questions (question_id, question_type)
    values ('4', 't');
insert into questions (question_id, question_type)
    values ('5', 'i');
insert into questions (question_id, question_type)
    values ('6', 'i');

insert into mcq (question_id, question, choice_1, choice_2, choice_3, choice_4)
    values ('1', 'What is the best UC?', 'UCLA', 'Berkeley', 'UCSB', 'UCSD');
insert into mcq (question_id, question, choice_1, choice_2, choice_3, choice_4)
    values ('2', 'What is your favorite color?', 'blue', 'red', 'orange', 'yellow');

insert into text (question_id, question, hint)
    values ('3', "What is your favorite weather", 'sun is up');
insert into text (question_id, question, hint)
    values ('4', 'What is your favorite color?', 'color of sky');

insert into image (question_id, question, image_type, show_for, max_time)
    values ('5', "What are your thoughts on this image?", "circle", '00:00:30', '00:05:00');
insert into image (question_id, question, image_type, show_for, max_time)
    values ('6', "What does this image remind you of?", "rectangle", '00:00:30', '00:05:00');

insert into users_experiments (worker_id, experiment_id, trial_id)
    values('1234', '5', '1');
insert into users_experiments (worker_id, experiment_id, trial_id)
    values('5678', '5', '-1');
insert into users_experiments (worker_id, experiment_id, trial_id)
    values('5678', '10', '5');

insert into experiments_questions(experiment_id, question_order, question_id)
    values('5', '1', '1');
insert into experiments_questions(experiment_id, question_order, question_id)
    values('5', '2', '2');
insert into experiments_questions(experiment_id, question_order, question_id)
    values('5', '2', '3');
insert into experiments_questions(experiment_id, question_order, question_id)
    values('10', '1', '4');
insert into experiments_questions(experiment_id, question_order, question_id)
    values('10', '1', '5');

insert into responses (trial_id, question_id, start_time, end_time, response)
    values ('5', '2', '08:00:00','08:10:00', 'blue');