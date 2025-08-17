import Link from "next/link"

interface PageHeaderProps {
  title: string
  breadcrumbs?: { label: string; href: string }[]
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-gray-400">›</span>
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-900">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-gray-900 transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}