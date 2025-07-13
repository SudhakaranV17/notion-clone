import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single supabase client for interacting with your database
export const createBrowserClient = () => {
  let client: ReturnType<typeof createClient> | null = null;

  return () => {
    if (client) return client;

    client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
      },
    });

    return client;
  };
};

export const browserClient = createBrowserClient();
