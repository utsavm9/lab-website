-- Initializes the database with test values

insert into users (worker_id, lastname, firstname, password_hash)
    values ('1234', 'Smith', 'John', 'hash(1)');
insert into users (worker_id, lastname, firstname, password_hash)
    values ('5678', 'George', 'Peter', 'hash(2)');

insert into mcq (question_id, question, choice_1, choice_2, choice_3, choice_4)
    values ('1', 'What is the best UC?', 'UCLA','Berkeley','UCSB', 'UCSD');
insert into mcq (question_id, question, choice_1, choice_2, choice_3, choice_4)
    values ('2', 'What is your favorite color?', 'blue','red','orange', 'yellow');

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

insert into text (question_id, question, hint)
    values ('3', "What is your favorite weather", 'sun is up');
insert into text (question_id, question, hint)
    values ('4', 'What is your favorite color?', 'color of sky');

insert into image (question_id, question, image_type, show_for, max_time)
    values ('5', "What are your thoughts on this image?", "circle", '5', '20');
insert into image (question_id, question, image_type, show_for, max_time)
    values ('6', "What does this image remind you of?", "rectangle", '5', '20');

insert into users_experiments (worker_id, experiment_id, trial_id)
    values('1234', '10', '11')
insert into users_experiments (worker_id, experiment_id, trial_id)
    values('5678', '15', '12')
insert into users_experiments (worker_id, experiment_id, trial_id)
    values('5678', '20', '13')

insert into experiments_questions(experiment_id, question_order, question_id)
    values('10','123456','1');
insert into experiments_questions(experiment_id, question_order, question_id)
    values('15','134265','3');

insert into responses (trial_id, question_id, start_time, end_time, response)
    values ('11', '2', '5','blue')