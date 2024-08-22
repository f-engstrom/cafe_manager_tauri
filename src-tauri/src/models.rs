use diesel::prelude::*;

#[derive(Queryable, Selectable, Deserialize)]
#[diesel(table_name = crate::schema::products)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
#[derive(serde::Serialize)]
pub struct Product {
    
    pub id: Option<i32>,
    pub created_at: String,
    pub product_name: String,
    pub expiration_days: i32,
}

#[derive(Insertable)]
#[diesel(table_name = crate::schema::products)]
pub struct NewProduct {
    pub product_name: String,
    pub expiration_days: i32,
}

#[derive(Queryable, Selectable)]
#[diesel(table_name = crate::schema::product_expiration)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
#[derive(serde::Serialize)]
pub struct ProductExpiration {
    pub id: i32,
    pub created_at: String,
    pub product: i32,
    pub start_date: String,
    pub end_date: String,
    pub note: String,
}
