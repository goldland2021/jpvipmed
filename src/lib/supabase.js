import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, siteConfig } from "../config";

export const supabase = isSupabaseConfigured
  ? createClient(siteConfig.supabaseUrl, siteConfig.supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  : null;
