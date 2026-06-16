import { db } from "@/libs/supabase";

const normalizeCompany = (raw) => {
    if (!raw) return null;

    const limits = raw.company_limits?.[0];

    return {
        id: raw.id,
        legalName: raw.legal_name,
        brandName: raw.brand_name,
        description: raw.description,
        mission: raw.mission,
        vision: raw.vision,
        slogans: raw.company_slogans?.map(s => s.slogan) ?? [],
        values: raw.company_values?.map(v => v.value) ?? [],
        address: raw.company_address?.[0] ?? null,
        contact: raw.company_contact?.[0] ?? null,
        socialMedia: raw.company_social_media ?? [],
        mediaAssets: raw.company_media_assets ?? [],
        limits: limits ? {
            title: limits.title,
            paragraphs: limits.company_limits_paragraphs?.map(p => p.paragraph) ?? [],
            }
        : null,
        cachedAt: Date.now(),
    };
};

export const getCompany = async () => {
    const { data, error } = await db
        .from("company")
        .select(`
            id,
            legal_name,
            brand_name,
            description,
            mission,
            vision,
            company_slogans (
                id,
                slogan,
                order_index
            ),
            company_values (
                id,
                value,
                order_index
            ),
            company_limits (
                id,
                title,
                company_limits_paragraphs (
                id,
                paragraph,
                order_index
                )
            ),
            company_address (
                street,
                city,
                province,
                region,
                country
            ),
            company_contact (
                phone,
                email
            ),
            company_social_media (
                platform,
                url
            ),
            company_media_assets (
                asset_type,
                url
            )
        `)
        .order("order_index", { foreignTable: "company_slogans" })
        .order("order_index", { foreignTable: "company_values" })
        .order("order_index", { foreignTable: "company_limits.company_limits_paragraphs" })
        .limit(1)
        .single();

    if (error) {
        console.error("Error fetching company:", error);
        throw error;
    }

    const normalizer = normalizeCompany(data)

    return normalizer;
};