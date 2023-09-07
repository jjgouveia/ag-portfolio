import { supabase } from "@/app/utils/supabase";

const getProductById = async (id: string) => {

    let { data: products, error } = await supabase
        .from('products')
        .select('id')
        .eq('id', id);

    if (error) {
        throw new Error(error.message);
    }

    return products;

};

export default getProductById;