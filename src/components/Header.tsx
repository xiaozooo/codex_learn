import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "学习地图" },
  { to: "/quiz", label: "小测验" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        <span className="brand-mark">C</span>
        <span className="brand-copy">
          <strong>Codex 学习速成</strong>
          <span>命令、技巧、流程，一次串起来</span>
        </span>
      </Link>
      <nav className="site-nav" aria-label="主导航">
        {links.map((link) => (
          <NavLink
            key={link.to}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
