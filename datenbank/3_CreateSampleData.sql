USE dart_db;

INSERT INTO player (pk_player_id,email,nickname,password) VALUES
                                                    ('1','Testuser@test.de','Test','$argon2id$v=19$m=4096,t=3,p=1$VGVzdFRlc3RUZXN0VGVzdA$K2vVt//Mi7w5fJpuXP9mTOVKTuUYdI/VQ4DsiJxujN8'),
                                                    ('2','TestAragon@test.de','Nutzer2','$argon2id$v=19$m=4096,t=3,p=1$TWVlck1lZXJNZWVyTWVlcg$KAbHzq0vuEIH0/fQgncjX/3fXGH0YsEW5/Ud977O6uI'),
                                                    ('3','AndererUser@test.de','Nutzer3','$argon2id$v=19$m=4096,t=3,p=1$SjUxZHB3YzllcEs1MmFObQ$zPnbbyfgf94/noQAIqROb4ksDpKz4vZ5SuHkTvNbijg');


INSERT INTO login (fk_player_id, login_time) VALUES
                                                    ('1','2008-03-10 17:37:09'),
                                                    ('1','2019-11-18 02:55:05'),
                                                    ('2','2017-07-04 08:31:00'),
                                                    ('2',NOW()),
                                                    ('3','1999-09-09 09:59:59');


INSERT INTO game (pk_game_id,fk_game_type_id, date, amount_sets, amount_legs) VALUES
                                                    ('1','1','2008-06-1', '1','5'),
                                                    ('2','2','2015-08-27', '2','3'),
                                                    ('3','4',NOW(), '1','3');


INSERT INTO game_player (fk_game_id, fk_player_id,player_order) VALUES
                                                    ('1','1','1'),
                                                    ('1','2','2'),
                                                    ('2','1','1'),
                                                    ('2','3','2'),
                                                    ('3','1','1'),
                                                    ('3','2','2'),
                                                    ('3','3','3');


/* Spiel 1 */
INSERT INTO set_table (pk_set_id,fk_game_id) VALUES
    ('1', '1');

/* Spiel 2 */
INSERT INTO set_table (pk_set_id,fk_game_id) VALUES
                                  ('2', '2'),
                                  ('3', '2');

/* Spiel 3 */
INSERT INTO set_table (pk_set_id,fk_game_id) VALUES
    ('4', '3');


/* Spiel 1 */
INSERT INTO leg (pk_leg_id,fk_set_id) VALUES
                                ('1', '1'),
                                ('2', '1'),
                                ('3', '1'),
                                ('4', '1'),
                                ('5', '1');
/* Spiel 2 */
INSERT INTO leg (pk_leg_id,fk_set_id) VALUES
                                ('6', '2'),
                                ('7', '2'),
                                ('8', '2'),
                                ('9', '3'),
                                ('10', '3'),
                                ('11', '3');

/* Spiel 3 */
INSERT INTO leg (pk_leg_id,fk_set_id) VALUES
                                ('12', '4'),
                                ('13', '4'),
                                ('14', '4');




