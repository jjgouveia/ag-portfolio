import { supabase } from "../utils/supabase";

const getAllProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    throw error;
  }
  return data;
};

export default getAllProducts;
