"use client";

export function BookingEmbed({
  bookingUrl,
  name,
}: {
  bookingUrl: string;
  name?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl border border-surface-border bg-surface-elevated p-6 sm:p-8">
      <div className="mb-6 text-center">
        <p className="eyebrow mb-2">You&apos;re qualified</p>
        <h2 className="font-display text-2xl font-bold text-content-primary">
          {name ? `Nice to meet you, ${name.split(" ")[0]}. ` : ""}Pick a time
        </h2>
        <p className="mt-2 text-content-secondary">
          Book your strategy call below. We&apos;ll confirm whether your
          territory is open and map out your numbers.
        </p>
      </div>

      {bookingUrl ? (
        <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface">
          <iframe
            src={bookingUrl}
            title="Book your strategy call"
            className="h-[680px] w-full"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-surface-border bg-surface p-8 text-center">
          <p className="text-content-secondary">
            Thanks — your details are in. The booking calendar isn&apos;t
            connected yet in this environment.
          </p>
          <p className="mt-2 text-sm text-content-muted">
            Set <code className="text-brand-cyan">NEXT_PUBLIC_BOOKING_URL</code>{" "}
            to embed your GoHighLevel/Calendly calendar here.
          </p>
        </div>
      )}
    </div>
  );
}
