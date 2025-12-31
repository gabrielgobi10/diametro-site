import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Recruitment from "./components/Recruitment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

function HomePage({
  activeSection,
  onNavigate,
  onContactClick,
}: {
  activeSection: string;
  onNavigate: (section: string) => void;
  onContactClick: () => void;
}) {
  return (
    <>
      <Header activeSection={activeSection} onNavigate={onNavigate} />
      <Hero onContactClick={onContactClick} />
      <Services />
      <About />
      <Projects />
      <Recruitment onContactClick={onContactClick} />
      <Contact />
      <Footer />
    </>
  );
}

function PageShell({
  children,
  activeSection,
  onNavigate,
}: {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (section: string) => void;
}) {
  return (
    <>
      <Header activeSection={activeSection} onNavigate={onNavigate} />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("home");

  // Só faz tracking de scroll quando estiver na HOME
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "services", "about", "projects", "recruitment", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavigate = useCallback(
    (section: string) => {
      // Se não estiver na home, vai primeiro para "/" e depois faz scroll
      if (location.pathname !== "/") {
        navigate(`/#${section}`);
        return;
      }

      const element = document.getElementById(section);
      if (!element) return;

      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    },
    [location.pathname, navigate]
  );

  // Quando cair em "/#secao", faz o scroll automaticamente
  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = location.hash?.replace("#", "");
    if (!hash) return;

    const el = document.getElementById(hash);
    if (!el) return;

    const offsetTop = el.offsetTop - 80;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  const handleContactClick = useCallback(() => {
    handleNavigate("contact");
  }, [handleNavigate]);

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              activeSection={activeSection}
              onNavigate={handleNavigate}
              onContactClick={handleContactClick}
            />
          }
        />

        <Route
          path="/privacidade"
          element={
            <PageShell activeSection={"home"} onNavigate={handleNavigate}>
              <Privacy />
            </PageShell>
          }
        />

        <Route
          path="/termos"
          element={
            <PageShell activeSection={"home"} onNavigate={handleNavigate}>
              <Terms />
            </PageShell>
          }
        />
      </Routes>
    </div>
  );
}
