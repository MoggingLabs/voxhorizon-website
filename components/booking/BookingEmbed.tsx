"use client";

export function BookingEmbed({
  bookingUrl,
  name,
}: {
  bookingUrl: string;
  name?: string;
}) {
  return (
    <div className="vh-block" style={{ borderColor: "var(--c-cyan)" }}>
      <div
        style={{
          paddingBottom: 18,
          marginBottom: 20,
          borderBottom: "1px dashed var(--hr)",
        }}
      >
        <div
          className="eye"
          style={{
            color: "var(--c-cyan)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          You’re qualified
        </div>
        <h2 className="vh-h4" style={{ marginTop: 12 }}>
          {name ? `Good to meet you, ${name.split(" ")[0]}. ` : ""}
          <em>Pick a time.</em>
        </h2>
        <p
          style={{
            marginTop: 12,
            fontFamily: "var(--f-sans)",
            fontSize: 14,
            lineHeight: 1.55,
            color: "var(--c-body)",
            maxWidth: 520,
          }}
        >
          Book your call below. We’ll confirm whether your zip is still open and
          map out your numbers.
        </p>
      </div>

      {bookingUrl ? (
        <div
          style={{
            border: "1px solid var(--hr-deep)",
            background: "var(--c-bg-shadow)",
            overflow: "hidden",
          }}
        >
          <iframe
            src={bookingUrl}
            title="Book your strategy call"
            style={{ height: 680, width: "100%", border: 0, display: "block" }}
            loading="lazy"
          />
        </div>
      ) : (
        <div
          style={{
            border: "1px dashed var(--hr-deep)",
            background: "var(--c-bg-shadow)",
            padding: 32,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--f-sans)",
              fontSize: 14,
              color: "var(--c-body)",
            }}
          >
            Thanks — your details are in. The booking calendar isn’t connected
            yet in this environment.
          </p>
          <p style={{ marginTop: 8, fontSize: 11, color: "var(--c-mute)" }}>
            Set{" "}
            <code style={{ color: "var(--c-cyan)" }}>
              NEXT_PUBLIC_BOOKING_URL
            </code>{" "}
            to embed your GoHighLevel/Calendly calendar here.
          </p>
        </div>
      )}
    </div>
  );
}
