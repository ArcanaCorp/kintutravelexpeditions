import { db } from "@/libs/supabase";

export const formAddContact = async (form) => {
    try {
        const { data, error } = await db
            .from('contact_messages')
            .insert([
                {
                    full_name: form.name,
                    phone_whatsapp: form.phone || null,
                    email: form.email || null,
                    message: form.message,
                    tour_interest: form.tour || null,
                },
            ])
            .select()
            .single();

        if (error) throw error;

        return data;
    } catch (error) {
        console.error("Failed to insert contact message:", error);
        throw error;
    }
}

export const formAddMessage = async (form) => {
    try {
        const { data, error } = await db
            .from('messages')
            .insert([form])
            .single()

        if (error) throw error;
            return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}