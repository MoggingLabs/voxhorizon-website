import Link from "next/link";

// Carbon Trader chrome — single-line terminal footer.
export function Footer() {
  return (
    <footer className="vh-footer">
      <span>© MMXXVI VoxHorizon LLC</span>
      <span>
        <Link href="/brand">Brand</Link> · <Link href="/system">System</Link> ·{" "}
        <Link href="/territory">Territory</Link>
      </span>
      <a href="mailto:operators@voxhorizon.io">operators@voxhorizon.io</a>
    </footer>
  );
}
