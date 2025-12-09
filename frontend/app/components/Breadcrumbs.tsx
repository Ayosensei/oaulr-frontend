import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} className="flex items-center">
                            {index > 0 && (
                                <span className="mx-2 text-gray-400">/</span>
                            )}
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-[#002147] hover:underline transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={`font-medium ${isLast ? 'text-[#002147]' : 'text-gray-500'}`}>
                                    {item.label}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
