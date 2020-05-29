CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INTEGER,
    img TEXT
);



--DUMMY DATA FOR TESTING

-- INSERT INTO products
-- (name, price, img)
-- VALUES 
-- ('shoes', 25, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEKGfQmM-dzN0n4xlx9n5DfQaukPzVAcNtNvkED8mi-M5Nk6kR&usqp=CAU'),
-- ('pants', 15, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEKGfQmM-dzN0n4xlx9n5DfQaukPzVAcNtNvkED8mi-M5Nk6kR&usqp=CAU'),
-- ('jacket', 30, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEKGfQmM-dzN0n4xlx9n5DfQaukPzVAcNtNvkED8mi-M5Nk6kR&usqp=CAU');