import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "Contact", href: "#contact", ariaLabel: "Contact" },
  { label: "Feedback", href: "#feedback", ariaLabel: "Feedback" },
  { label: "FAQ", href: "#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg2 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-3xl">
              <img src="/icons/logo.png" alt="logo" className="h-7 w-7 lg:h-8 lg:w-8"/>
              </div>
              <div className="text-white font-bold text-xl">
                OwnAdvo
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
       
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-white rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-white  mb-1"></div>
          <div className="w-5 h-0.5 bg-white  mb-1"></div>
          <div className="w-5 h-0.5 bg-white "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg3 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg1 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};