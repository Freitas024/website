export default function Footer() {
  const links = [
    { href: "#home", label: "Sobre" },
    { href: "#work", label: "Projetos" },
    { href: "#services", label: "Serviços" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <footer className="px-14 py-7 border-t border-border flex items-center justify-between flex-wrap gap-4 max-md:flex-col max-md:text-center max-md:px-6 max-md:gap-3">
      <div>
        <div className="font-body text-[15px] font-semibold text-foreground">
          Vinicius Freitas
        </div>
        <span className="block text-xs text-muted font-light mt-0.5">
          Frontend Developer &amp; UI/UX Specialist
        </span>
      </div>

      <ul className="flex gap-[22px] list-none flex-wrap max-md:justify-center">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-[11px] text-muted tracking-[0.05em] transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="font-mono text-[10.5px] text-muted opacity-45">
        © 2025 vinicius.dev
      </p>
    </footer>
  );
}
