import { NavLink } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import { useState, useRef, useEffect, lazy, Suspense } from "react";
import "../Style/nav.css";

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
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `w-full flex justify-start py-4 pl-[10px] bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 transition-all duration-150 ${
                isActive ? "text-gray-200 font-semibold" : "hover:text-gray-200"
              }`
            }
            onClick={handleCloseMenu}
          >
            {names[index]}
          </NavLink>
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
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (closing) {
      setMenuOpen(false);
      setClosing(false);
    }
  };

  return (
    <>
      <div className="h-[100px] w-full bg-gradient-to-r from-slate-950 via-purple-700 to-slate-950 flex justify-between items-center shadow-sm shadow-gray-500 sticky top-0 select-none px-4 md:px-8 z-[9999]">
        
        {/* Site Name */}
        <div className="w-auto md:w-[300px] h-[70px] flex justify-center items-center">
          <p id="mainname" className="px-4 py-1 md:w-full md:h-[40px] flex justify-center items-center bg-gradient-to-r from-slate-950 to-cyan-700 rounded-full text-white text-xl md:text-2xl font-normal text-center" title="Site Name">
            ＤｉａｇｎｏＳｙｎｃ
          </p>
        </div>

        {/* Desktop Site Links */}
        <div className="hidden md:flex w-[450px] h-[70px] justify-start items-center">
          {["/", "/patient", "/medicine", "/totalbill"].map((path, index) => {
            const names = ["Home", "Patient", "Medicine", "Bill"];
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `w-[100px] flex justify-center items-center text-[15px] tracking-wide font-normal transition-all ease-in-out duration-200 ${
                    isActive
                      ? "text-cyan-400 rounded-full shadow-lg shadow-purple-500 drop-shadow-[0_0_10px_purple]"
                      : "text-cyan-300 hover:text-cyan-400 hover:rounded-full hover:shadow-lg hover:shadow-cyan-400 hover:drop-shadow-[0_0_10px_#00ffff]"
                  }`
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </div>

        {/* Hamburger Icon */}
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

        {/* Mobile Dropdown */}
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
        <div className="w-auto md:w-[260px] h-[70px] flex justify-center items-center">
          <div className="w-[40px] h-[40px] border-[2px] border-cyan-400 rounded-full">
            <NavLink
              className="h-full w-full flex justify-center items-center hover:text-gray-400 transition-all ease-in-out duration-200"
              to="/"
            >
              <i
                className="bx bx-user text-lg hover:text-cyan-400 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-400 to-purple-400 transition-all ease-in-out duration-200"
                title="Profile"
              ></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
