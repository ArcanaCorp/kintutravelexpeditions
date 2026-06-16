import { db } from "@/libs/supabase";

export const getTours = async () => {
    const { data, error } = await db
        .from("experiences")
        .select(`
            *,
            experience_images (
                id,
                image_url,
                is_cover
            )
        `)
        .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
};

export const getTourBySlug = async (slug) => {
    const { data, error } = await db
        .from('experiences')
        .select(`
            *,
            experience_images (
                id,
                image_url,
                is_cover
            )
        `)
        .eq('slug', slug)
    
    if (error) throw error;
    return data;
}