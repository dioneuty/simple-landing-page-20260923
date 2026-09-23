import { site } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <p className="text-lg font-bold text-primary">{site.name}</p>
            <p className="mt-1 text-sm text-muted">{site.tagline}</p>
          </div>
          <div className="text-sm text-muted">
            <p>{site.address}</p>
            <p className="mt-1">
              <a
                href={`tel:${site.phone.replace(/-/g, "")}`}
                className="hover:text-primary"
              >
                {site.phone}
              </a>
            </p>
            <p className="mt-1">{site.hours}</p>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-center text-sm text-muted">
          © {currentYear} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
