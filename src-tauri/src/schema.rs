// @generated automatically by Diesel CLI.

diesel::table! {
    product_expiration (id) {
        id -> Integer,
        created_at -> Timestamp,
        product -> Integer,
        start_date -> Timestamp,
        end_date -> Timestamp,
        note -> Text,
    }
}

diesel::table! {
    products (id) {
        id -> Integer,
        created_at -> Timestamp,
        product_name -> Text,
        expiration_days -> Integer,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    product_expiration,
    products,
);
