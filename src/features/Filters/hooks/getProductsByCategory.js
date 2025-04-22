import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(url, key);
export const getProductsByCategory = (pageIndex, pageSize, category) => {
    const queryKey = ['product_cards', category, pageIndex, pageSize];

    const from = pageIndex * pageSize;
    const to = from + pageSize - 1;

    return {
        queryKey,
        queryFn: async () => {
            let query = supabase
                .from('product_card')
                .select(`
                    product_id,
                    main_image,
                    secondary_image,
                    products( title, price,
                        colors:product_colors!inner ( name ))
                `, { count: 'exact' }) // 🔥 This adds the total count!
                .range(from, to);

            if (category !== 'all') {
                query = query.eq('main_category', category);
            }

            const { data, count, error } = await query;

            if (error) {
                throw error;
            }

            return {
                products: data?.map(item => flattenKeepArrays(item)) || [],
                total: count ?? 0, // 💡 default to 0 if count is null
            };
        }
    };
};


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

