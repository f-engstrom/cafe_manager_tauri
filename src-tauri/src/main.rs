// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod commands;
pub mod models;
pub mod schema;
use commands::{add_to_expiration, add_to_products, get_from_expiration, get_products};
mod db;

fn main() {
    tauri::Builder::default()
        .setup(|_app| {
            db::init();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            get_products,
            add_to_products,
            get_from_expiration,
            add_to_expiration
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
