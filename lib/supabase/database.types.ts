/**
 * Hand-written to match the initial migration. Regenerate after schema changes
 * with the Supabase MCP `generate_typescript_types` (or `supabase gen types`).
 */

export type RevenueTier =
  | "under_50k"
  | "50k_100k"
  | "100k_250k"
  | "250k_500k"
  | "500k_plus";

export type MarketSegment = "kitchen_bath" | "roofing" | "decking";

export type LeadStatus =
  | "new"
  | "contacted"
  | "booked"
  | "qualified"
  | "disqualified"
  | "won"
  | "lost";

export type Database = {
  public: {
    Tables: {
      website_leads: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          markets: MarketSegment[];
          revenue_tier: RevenueTier;
          full_name: string;
          company: string | null;
          email: string;
          phone: string;
          source_page: string | null;
          referrer: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
          utm_term: string | null;
          utm_content: string | null;
          status: LeadStatus;
          ghl_contact_id: string | null;
          ghl_synced_at: string | null;
          email_sent_at: string | null;
          notes: string | null;
          dedupe_key: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          markets: MarketSegment[];
          revenue_tier: RevenueTier;
          full_name: string;
          company?: string | null;
          email: string;
          phone: string;
          source_page?: string | null;
          referrer?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          utm_term?: string | null;
          utm_content?: string | null;
          status?: LeadStatus;
          ghl_contact_id?: string | null;
          ghl_synced_at?: string | null;
          email_sent_at?: string | null;
          notes?: string | null;
          dedupe_key?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["website_leads"]["Insert"]>;
        Relationships: [];
      };
      website_bookings: {
        Row: {
          id: string;
          created_at: string;
          lead_id: string | null;
          provider: string;
          external_event_id: string | null;
          scheduled_at: string | null;
          attendee_email: string | null;
          attendee_name: string | null;
          status: string;
          raw_payload: Record<string, unknown> | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          lead_id?: string | null;
          provider: string;
          external_event_id?: string | null;
          scheduled_at?: string | null;
          attendee_email?: string | null;
          attendee_name?: string | null;
          status?: string;
          raw_payload?: Record<string, unknown> | null;
        };
        Update: Partial<Database["public"]["Tables"]["website_bookings"]["Insert"]>;
        Relationships: [
          {
            foreignKeyName: "website_bookings_lead_id_fkey";
            columns: ["lead_id"];
            referencedRelation: "website_leads";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      website_revenue_tier: RevenueTier;
      website_market_segment: MarketSegment;
      website_lead_status: LeadStatus;
    };
    CompositeTypes: Record<string, never>;
  };
};
