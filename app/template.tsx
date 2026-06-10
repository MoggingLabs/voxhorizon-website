/**
 * Per-navigation page-enter transition. template.tsx remounts on every route
 * change, retriggering the CSS animation. Done in CSS (not framer-motion) so
 * the SSR HTML never carries opacity:0 — no-JS users and crawlers always see
 * the page; prefers-reduced-motion disables it in base.css.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="vh-page-enter">{children}</div>;
}
