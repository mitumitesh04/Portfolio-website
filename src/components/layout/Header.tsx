import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Apply dark mode if preferred
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm"
          : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
            setMobileMenuOpen(false);
          }}
        >
          Mitesh<span className="text-foreground">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={cn(
                "nav-link px-3 py-2 rounded-lg transition",
                window.location.pathname === link.path
                  ? "bg-primary text-white"
                  : "hover:bg-primary/10"
              )}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = link.path;
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDarkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle dark mode</span>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 pt-24 pb-6 px-6 bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "top-0 opacity-100" : "-top-full opacity-0"
        )}
      >
        <nav className="flex flex-col space-y-4 items-center">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={cn(
                "text-lg nav-link",
                window.location.pathname === link.path ? "font-bold text-primary" : ""
              )}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = link.path;
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
