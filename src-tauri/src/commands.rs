use crate::{db::establish_db_connection, models};
use diesel::prelude::*;
use models::*;
use tauri::command;

// #[derive(serde::Serialize)]
// pub struct Product {
//     id: String,
//     product_name: String,
//     created_at: String,
//     expiration_days: u64,
// }

#[command]
pub fn get_products() -> Vec<Product> {
    use crate::schema::products::dsl::*;
    let mut connection = establish_db_connection();
    let results = products
        .limit(5)
        .select(Product::as_select())
        .load(&mut connection)
        .expect("Error loading posts");

    results
    // let product = Product {
    //     id: 12,
    //     product_name: String::from("kaka"),
    //     created_at: String::from("1234"),
    //     expiration_days: 1,
    // };

    // vec![product]
}

#[command]
pub fn get_from_expiration() -> Vec<ProductExpiration> {
    use crate::schema::product_expiration::dsl::*;
    let mut connection = establish_db_connection();
    let results = product_expiration
        .limit(5)
        .select(ProductExpiration::as_select())
        .load(&mut connection)
        .expect("Error loading posts");

    results
}
