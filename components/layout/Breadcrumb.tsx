import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/45">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition hover:text-cyan-200">
            LBOriente
          </Link>
        </li>

        <li aria-hidden="true">/</li>

        <li>
          <Link
            href="/polla-mundial"
            className="transition hover:text-cyan-200"
          >
            Polla Mundial
          </Link>
        </li>

        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>

            {item.href ? (
              <Link href={item.href} className="transition hover:text-cyan-200">
                {item.label}
              </Link>
            ) : (
              <span className="text-cyan-100">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}