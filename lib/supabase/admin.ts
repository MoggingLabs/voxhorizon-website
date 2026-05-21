import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { serverEnv } from "@/lib/env";
import type { Database } from "@/lib/supabase/database.types";

/**
 * Service-role Supabase client. Bypasses RLS — SERVER ONLY.
 * The `server-only` import makes the build fail if this is ever pulled into a
 * client component.
 */
let client: SupabaseClient<Database> | null = null;

export function getSupabaseAdmin(): SupabaseClient<Database> {
  if (client) return client;
  const env = serverEnv();
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      "Supabase admin client requested without SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY",
    );
  }
  client = createClient<Database>(
    env.SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
  return client;
}
