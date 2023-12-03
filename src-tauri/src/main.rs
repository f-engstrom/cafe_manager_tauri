// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod commands;
pub mod models;
pub mod schema;
use commands::{get_from_expiration, get_products};
mod db;

fn main() {
    tauri::Builder::default()
        .setup(|_app| {
            db::init();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![get_products, get_from_expiration])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
