import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function HeaderNavigation() {
  const { photographer, series } = usePortfolio();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!photographer) return null;

  const isActive = (path: string) => {
    // For home page
    if (path === "/" && location.pathname === "/") return true;
    // For other pages
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Mobile Layout */}
      <div className="sm:hidden">
        {/* Row 1: Logo + Title | Hamburger */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 flex-shrink-0">
              <path d="M50 5 C55 5, 65 20, 70 30 C75 40, 90 45, 95 50 C90 55, 75 60, 70 70 C65 80, 55 95, 50 95 C45 95, 35 80, 30 70 C25 60, 10 55, 5 50 C10 45, 25 40, 30 30 C35 20, 45 5, 50 5 Z" fill="hsl(25, 90%, 55%)"/>
            </svg>
            <h1 className="font-sans text-3xl leading-tight font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
              {photographer.name}
            </h1>
          </Link>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 -m-2 hover:opacity-70 transition-opacity"
                aria-label="Open navigation menu"
                aria-expanded={isMenuOpen}
              >
                <Menu className="h-7 w-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <ul className="flex flex-col gap-6">
                  {series.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={`/series/${s.slug}`}
                        onClick={handleNavClick}
                        className={`text-lg transition-all duration-200 ${
                          isActive(`/series/${s.slug}`)
                            ? "font-semibold text-foreground"
                            : "font-normal text-muted-foreground hover:text-gray-700"
                        }`}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/about"
                      onClick={handleNavClick}
                      className={`text-lg transition-all duration-200 ${
                        isActive("/about")
                          ? "font-semibold text-foreground"
                          : "font-normal text-muted-foreground hover:text-gray-700"
                      }`}
                    >
                      ¿Cómo funciona?
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Row 2: Tagline */}
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Humanos digitales para cuidar el bienestar de tus colaboradores. Aumenta la productividad, baja la rotación, crece el ROI.
        </p>

        {/* Row 3: Auth buttons */}
        <div className="flex gap-6 mt-4 text-lg font-medium" style={{ color: 'hsl(25, 90%, 55%)' }}>
          <button className="hover:opacity-70 transition-opacity">
            Iniciar sesión
          </button>
          <button className="hover:opacity-70 transition-opacity">
            Registrarse
          </button>
        </div>
      </div>

      {/* Tablet/Desktop Layout */}
      <div className="hidden sm:flex items-end justify-between mb-2">
        <div className="flex flex-col gap-4">
          {/* Title */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 lg:h-12 lg:w-12 flex-shrink-0">
              <path d="M50 5 C55 5, 65 20, 70 30 C75 40, 90 45, 95 50 C90 55, 75 60, 70 70 C65 80, 55 95, 50 95 C45 95, 35 80, 30 70 C25 60, 10 55, 5 50 C10 45, 25 40, 30 30 C35 20, 45 5, 50 5 Z" fill="hsl(25, 90%, 55%)"/>
            </svg>
            <h1 className="font-sans text-[2.1rem] lg:text-[2.4rem] leading-tight font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
              {photographer.name}
            </h1>
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-row flex-wrap gap-5 lg:gap-6">
              {series.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/series/${s.slug}`}
                    className={`text-base lg:text-[1.0625rem] leading-[1.375rem] transition-all duration-200 ${
                      isActive(`/series/${s.slug}`)
                        ? "font-semibold text-foreground"
                        : "font-normal text-muted-foreground hover:text-gray-700"
                    }`}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/about"
                  className={`text-base lg:text-[1.0625rem] leading-[1.375rem] transition-all duration-200 ${
                    isActive("/about")
                      ? "font-semibold text-foreground"
                      : "font-normal text-muted-foreground hover:text-gray-700"
                  }`}
                >
                  ¿Cómo funciona?
                </Link>
              </li>
            </ul>
          </nav>

          {/* Tagline */}
          <p className="text-base text-muted-foreground max-w-xl">
            Humanos digitales para cuidar el bienestar de tus colaboradores. Aumenta la productividad, baja la rotación, crece el ROI.
          </p>
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-col items-end gap-1 text-sm lg:text-[0.9375rem] text-muted-foreground">
          <button className="hover:text-foreground transition-colors py-1">
            Iniciar sesión
          </button>
          <button className="hover:text-foreground transition-colors py-1">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
