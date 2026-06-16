import { SUPABASE } from "@/config";
import { createClient } from "@supabase/supabase-js";

export const db = createClient(SUPABASE.URL, SUPABASE.TOKEN);