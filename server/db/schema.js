const schema = `
  DROP TABLE IF EXISTS ingredients;
  DROP TABLE IF EXISTS recipes;

  CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    cook_time INTEGER,
    instructions TEXT,
    source_url VARCHAR(255),
    favorite BOOLEAN DEFAULT FALSE
  );

  CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    quantity VARCHAR(50),
    unit VARCHAR(50)
  );
`;

module.exports = schema;
