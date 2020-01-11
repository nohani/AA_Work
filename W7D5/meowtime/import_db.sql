DROP TABLE cattoys;
DROP TABLE toys;
DROP TABLE cats;

CREATE TABLE cats(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    breed VARCHAR(255) NOT NULL
);

CREATE TABLE toys(
    id SERIAL PRIMARY KEY,
    price INTEGER NOT NULL,
    color VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE cattoys(
    id SERIAL PRIMARY KEY,
    cat_id INTEGER NOT NULL,
    toy_id INTEGER NOT NULL,
    FOREIGN KEY(cat_id) REFERENCES cats(id),
    FOREIGN KEY(toy_id) REFERENCES toys(id)
);

INSERT INTO
    cats
    (name, color, breed)
VALUES
    ('nicole', 'white', 'homo sapiens'),
    ('sushil', 'brown', 'sapiens'),
    ('frog', 'green', 'amphibians'),
    ('soon-mi', 'white', 'sapiens'),
    ('AJ', 'black_beard', 'sapieno');

INSERT INTO
    toys
    (price, color, name)
VALUES
    (5, 'red', 'sudoku'),
    (6, 'blue', 'starwars'),
    (10, 'pink', 'barbie'),
    (12, 'black', 'ships'),
    (10, 'yellow', 'tic-tac-toe');

INSERT INTO 
    cattoys
    (cat_id, toy_id)
VALUES
      (
        (
        SELECT 
        id
        FROM
        cats
        WHERE
        name = 'nicole'
        LIMIT 1
        ),
        (
        SELECT
        id
        FROM
        toys
        WHERE
        name = 'barbie'
        )
        ),
    (
        (
        SELECT 
        id
        FROM
        cats
        WHERE
        breed = 'homo sapiens'
        LIMIT 1
        ),
        (
        SELECT
        id
        FROM
        toys
        WHERE
        name = 'sudoku'
        )
    ),
     (
        (
        SELECT 
        id
        FROM
        cats
        WHERE
        breed = 'amphibians'
        LIMIT 1
        ),

        (
        SELECT
        id
        FROM
        toys
        WHERE
        name = 'tic-tac-toe'
        )
    ),
     (
        (
        SELECT 
        id
        FROM
        cats
        WHERE
        breed = 'sapieno'
        LIMIT 1
        ),
        (
        SELECT
        id
        FROM
        toys
        WHERE
        name = 'starwars'
        )
    ),
     (
        (
        SELECT 
        id
        FROM
        cats
        WHERE
        breed = 'sapiens'
        LIMIT 1
        ),
        (
        SELECT
        id
        FROM
        toys
        WHERE
        name = 'ships'
        )
      );


