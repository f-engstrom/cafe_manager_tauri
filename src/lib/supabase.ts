import { createClient } from "@supabase/supabase-js";
import { Database } from "../models/supabase";
import { NewProduct, UpdatedProduct } from "../models/models";
import { invoke } from "@tauri-apps/api";
import { r } from "@tauri-apps/api/clipboard-79413165";
const supabaseUrl = "https://jwajghgfcoyqgvanwhwl.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient<Database>(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3YWpnaGdmY295cWd2YW53aHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NjE4NTAsImV4cCI6MTk5OTUzNzg1MH0.7eIle3K4ik5nYm3ZbBGwKJ2XakRWdPpBZdaT4Ia39RU"
);
export const getFromExpiraton = async () => {
  const response = await invoke("get_from_expiration");
  console.log("Exp", response);
  return response;
  // const { data, error } = await supabase.from("product_expiration")
  //   .select(`*, products (
  //     product_name
  //   )`);
  // if (error) console.log("error", error);
  // return data;
};
export const requestDeleteFromExpiraton = async (id: number) => {
  return supabase.from("product_expiration").delete().eq("id", id);
};
export const updateExpiration = async ({
  product,
  exp_date,
  start_date,
  note,
  id,
}: UpdatedProduct) => {
  return supabase
    .from("product_expiration")
    .update({ id, product, exp_date, start_date, note })
    .eq("id", id);
};
export const addToExpiration = async ({
  product,
  exp_date,
  start_date,
  note,
}: NewProduct) => {
  console.log("hallåman", product);
  invoke("add_to_expiration", {
    product: {
      id: 123,
      exp_date: exp_date,
      start_date: start_date,
      note: note,
    },
  }).then((response) => console.log(response));
  // return supabase
  //   .from("product_expiration")
  //   .insert({ product, exp_date, start_date, note });
};
export const addProduct = async ({ product_name, expiration_days }) => {
  invoke("add_to_products");
  // return supabase.from("products").insert({
  //   product_name,
  //   expiration_days,
  // });
};
export const updateProduct = async ({ product_name, expiration_days, id }) => {
  return supabase
    .from("products")
    .update({ product_name, expiration_days })
    .eq("id", id);
};

export const getProducts = async () => {
  invoke("get_products").then((response) => console.log(response));
  // const { data, error } = await supabase.from("products").select("*");
  // if (error) console.log("error", error);
  // return data;
};
export const requestDeleteProduct = async (id: number) => {
  return supabase.from("products").delete().eq("id", id);
};
