import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import {
  MARKET_LABELS,
  REVENUE_TIER_LABELS,
  type MarketSegment,
  type RevenueTier,
} from "@/lib/types/lead";

export type LeadNotificationProps = {
  fullName: string;
  company?: string | null;
  email: string;
  phone: string;
  markets: MarketSegment[];
  revenueTier: RevenueTier;
  sourcePage?: string | null;
  utm?: Record<string, string>;
  leadId: string;
};

const main = { backgroundColor: "#EFEBE2", fontFamily: "Georgia, 'Times New Roman', serif" };
const container = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #D9D5CB",
  borderRadius: "12px",
  margin: "24px auto",
  padding: "32px",
  maxWidth: "560px",
};
const label = { color: "#8E8B82", fontSize: "12px", margin: "0 0 2px" };
const value = { color: "#15171C", fontSize: "15px", margin: "0 0 16px", fontWeight: 600 };

export function LeadNotificationEmail({
  fullName,
  company,
  email,
  phone,
  markets,
  revenueTier,
  sourcePage,
  utm,
  leadId,
}: LeadNotificationProps) {
  const utmEntries = Object.entries(utm ?? {});
  return (
    <Html>
      <Head />
      <Preview>{`New lead: ${fullName}${company ? ` (${company})` : ""} — ${REVENUE_TIER_LABELS[revenueTier]}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={{ color: "#2D4ADE", fontSize: "13px", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 4px" }}>
            VoxHorizon — New Lead
          </Text>
          <Heading style={{ color: "#15171C", fontSize: "22px", margin: "0 0 24px" }}>
            {fullName}
            {company ? ` · ${company}` : ""}
          </Heading>

          <Section>
            <Row>
              <Column>
                <Text style={label}>Email</Text>
                <Text style={value}>{email}</Text>
              </Column>
              <Column>
                <Text style={label}>Phone</Text>
                <Text style={value}>{phone}</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={label}>Avg monthly revenue</Text>
                <Text style={value}>{REVENUE_TIER_LABELS[revenueTier]}</Text>
              </Column>
              <Column>
                <Text style={label}>Markets</Text>
                <Text style={value}>
                  {markets.map((m) => MARKET_LABELS[m]).join(", ")}
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={{ borderColor: "#D9D5CB", margin: "16px 0" }} />

          <Text style={label}>Source page</Text>
          <Text style={{ ...value, fontWeight: 400 }}>{sourcePage || "—"}</Text>

          {utmEntries.length > 0 && (
            <>
              <Text style={label}>Attribution</Text>
              <Text style={{ ...value, fontWeight: 400 }}>
                {utmEntries.map(([k, v]) => `${k}=${v}`).join("  ·  ")}
              </Text>
            </>
          )}

          <Text style={{ color: "#8E8B82", fontSize: "11px", margin: "20px 0 0" }}>
            Lead ID: {leadId}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default LeadNotificationEmail;
