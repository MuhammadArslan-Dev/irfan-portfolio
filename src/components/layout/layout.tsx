import { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">
        {/* Scroll-to-Top Button */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to Top"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white shadow-lg hover:scale-110 hover:shadow-gray-400/30 transition-all duration-300"
          >
            <i className="fas fa-arrow-up text-lg"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Layout;