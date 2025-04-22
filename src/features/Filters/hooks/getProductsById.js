import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(url, key);


export const getProductsById = (id) => {
    const queryKey = ['products', id];    
    return {
        queryKey,
        queryFn: async () => {
            let query = supabase
                .from('products')
                .select(`
                    title,
                    price,
                    description,
                    colors:product_colors (name, mainImage:image_url, sizes:product_sizes (size, stock:stock_quantity)),
                    images:product_images (image:image_url)
                `)
                .eq('id', id)


            const { data, error } = await query;
        
            if (error) {
                throw error;
            }
            
            return data?.map(item => flattenKeepArrays(item)) || [];
        }
    };
}

function flattenKeepArrays(obj, parentKey = '', sep = '.') {
    let result = {};

    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        let newKey = parentKey ? `${key}` : key;
        let value = obj[key];

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Recursively flatten nested objects
        Object.assign(result, flattenKeepArrays(value, newKey, sep));
        } else {
        // Directly assign if it's a primitive or an array
        result[newKey] = value;
        }
    }

    return result;
    }

