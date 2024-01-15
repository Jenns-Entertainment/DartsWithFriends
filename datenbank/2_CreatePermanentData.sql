USE dart_db;

INSERT INTO game_type (pk_game_type_id, description,score) VALUES
                                                 ('1','301 Straight Out', '301'),
                                                 ('2','301 Double Out', '301'),
                                                 ('3','301 Master Out', '301'),
                                                 ('4','501 Straight Out', '501'),
                                                 ('5','501 Double Out', '501'),
                                                 ('6','501 Master Out', '501');


INSERT INTO field_type (pk_field_type_id, description, multiplier) VALUES
                                                ('1','normal','1'),
                                                ('2','double','2'),
                                                ('3','tripple','3');
