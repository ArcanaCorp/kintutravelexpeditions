import { db } from "@/libs/supabase"

export const getBlogs = async () => {
    const { data, error } = await db
        .from('blogs')
        .select('*')
        .order("created_at", { ascending: false })
    
    if (error) throw error;

    return data;
}

export const getBlogBySlug = async (slug) => {
    const { data, error } = await db
        .from('blogs')
        .select(`*`)
        .eq('slug', slug)
    
    if (error) throw error;
    return data;
}