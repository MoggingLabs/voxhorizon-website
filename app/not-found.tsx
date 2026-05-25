import Link from "next/link";

export default function NotFound() {
  return (
    <section className="vh-pintro">
      <div className="crumb">
        Error · 404<em>— off the grid</em>
      </div>
      <h1>
        Over the <em>horizon</em>.
      </h1>
      <p className="lede">
        The page you’re looking for doesn’t exist or has moved. Head back to the desk, or check
        which territories are still open this quarter.
      </p>
      <div className="vh-cta">
        <Link href="/" className="p">
          [ Back to desk ]
        </Link>
        <Link href="/territory" className="g">
          View the map
        </Link>
      </div>
    </section>
  );
}
