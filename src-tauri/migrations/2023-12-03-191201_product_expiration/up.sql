-- Your SQL goes here
CREATE TABLE product_expiration (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    product INTEGER NOT NULL,
    start_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    note TEXT NOT NULL
)