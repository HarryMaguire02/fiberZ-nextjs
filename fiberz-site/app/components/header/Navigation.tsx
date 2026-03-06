import NavLink from './NavLink';

interface NavLinkItem {
  href: string;
  label: string;
  isContactButton?: boolean;
}

interface NavigationProps {
  navLinks: NavLinkItem[];
  onContactClick: () => void;
}

export default function Navigation({ navLinks, onContactClick }: NavigationProps) {
  return (
    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          isContactButton={link.isContactButton}
          onContactClick={onContactClick}
        />
      ))}
    </nav>
  );
}
