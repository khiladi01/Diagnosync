import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import { useState, useRef, useEffect, lazy, Suspense } from "react";

// Lazy load effect on Tablet & Mobile -->
const MobileMenu = lazy(() => Promise.resolve({
  default: ({ menuRef, handleCloseMenu, closing, onAnimationEnd }) => (
    <div
      ref={menuRef}
      className={`absolute top-[70px] left-0 w-full bg-slate-900 bg-opacity-95 flex flex-col items-center z-50 md:hidden ${closing ? 'animate-slide-up' : 'animate-slide-down'}`}
      onAnimationEnd={onAnimationEnd}
    >
      {["/", "/patient", "/medicine", "/totalbill"].map((path, index) => {
        const names = ["➢ Home", "➢ Patient", "➢ Medicine", "➢ Bill"];
        return (
          <Link
            key={index}
            to={path}
            className="w-full flex justify-start py-4 pl-[10px] text-cyan-300 hover:text-cyan-400 transition-all duration-150"
            onClick={handleCloseMenu}
          >
            {names[index]}
          </Link>
        );
      })}
    </div>
  )
}));

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const menuRef = useRef(null);
  const closeTimeout = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    }
    if (menuOpen && !closing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, closing]);

  // Handle menu close with animation and fallback
  const handleCloseMenu = () => {
    setClosing(true);
    // Fallback: force close after 400ms if animationend doesn't fire
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 400);
  };
  const handleMenuButton = () => {
    if (menuOpen) {
      handleCloseMenu();
    } else {
      setMenuOpen(true);
      setClosing(false);
    }
  };
  const handleAnimationEnd = () => {
    console.log('Animation ended');
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (closing) {
      setMenuOpen(false);
      setClosing(false);
    }
  };

  return (
    <>
      <div className="h-[70px] w-full bg-gradient-to-r from-slate-950 via-purple-700 to-slate-950 flex justify-between items-center shadow-sm shadow-white sticky top-0 select-none px-4 md:px-8">
        {/* Site Name */}
        <div className="w-auto md:w-[300px] h-[70px] flex justify-center items-center">
          <p className="px-4 py-1 md:w-full md:h-[40px] flex justify-center items-center rounded-full bg-gradient-to-r from bg-slate-950 to-pink-700 text-white text-xl md:text-2xl font-normal text-center" title="Site Name">
            ＤｉａｇｎｏＳｙｎｃ
          </p>
        </div>

        {/* Site Links */}
        <div className="hidden md:flex w-[450px] h-[70px] justify-start items-center">
          {["/", "/patient", "/medicine", "/totalbill"].map((path, index) => {
            const names = ["Home", "Patient", "Medicine", "Bill"];
            return (
              <Link
                key={index}
                className="w-[100px] flex justify-center items-center text-cyan-300 text-sm hover:text-cyan-400 font-normal
                hover:rounded-full hover:shadow-lg hover:shadow-cyan-400 hover:drop-shadow-[0_0_10px_#00ffff] transition-all ease-in-out duration-200"
                to={path}
              >
                {names[index]}
              </Link>
            );
          })}
        </div>

        {/* Hamburger/Cross Icon for Mobile/Tablet */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white text-3xl focus:outline-none transition-transform duration-300"
            onClick={handleMenuButton}
            aria-label={menuOpen && !closing ? "Close menu" : "Open menu"}
          >
            <i
              className={`bx ${menuOpen && !closing ? "bx-x" : "bx-menu"} transition-all duration-300 ease-in-out`}
              style={{ transform: menuOpen && !closing ? "rotate(90deg) scale(1.2)" : "rotate(0deg) scale(1)" }}
            ></i>
          </button>
        </div>

        {/* Mobile Dropdown Menu with Lazy Load and Animation */}
        <Suspense fallback={null}>
          {menuOpen && (
            <MobileMenu
              menuRef={menuRef}
              handleCloseMenu={handleCloseMenu}
              closing={closing}
              onAnimationEnd={handleAnimationEnd}
            />
          )}
        </Suspense>

        {/* User Profile */}
        <div className="w-auto md:w-[300px] h-[70px] flex justify-center items-center">
          <div className="w-[50px] h-full">
            <Link
              className="h-full w-full flex justify-center items-center hover:text-gray-400 transition-all ease-in-out duration-200"
              to="/"
            >
              <i
                className="bx bx-user text-lg hover:text-pink-400 cursor-pointer text-white transition-all ease-in-out duration-200"
                title="Profile"
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
