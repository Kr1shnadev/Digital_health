export function PrimaryButton({ children, href = "#", variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800";
  const styles =
    variant === "primary"
      ? "bg-blue-900 text-white hover:bg-blue-800"
      : "border border-blue-200 bg-white text-blue-900 hover:bg-blue-50";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
