// LIBs
import { useState } from "react";

// CONSTANTs
import { styles } from "../../constants/styles";
import { images } from "../../constants/images";
import { menuData } from "../../constants/data";

// ICONs
import { FiMenu, FiX } from "react-icons/fi";

export function HeaderContainer() {
  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-10">
      <div className={`${styles.container_page} py-5`}>
        <div className="max-w-[1280px] w-full mx-auto px-5 flex justify-between items-center">
          <button className="ml-5">
            <img src={images.logo} width={111} height={34} alt="logo" />
          </button>

          <button 
            className="text-2xl text-white block lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <FiX />
            ) : (
              <FiMenu />
            )}
          </button>

          <nav className={`absolute lg:relative right-3 lg:right-[unset] top-[100%] lg:top-[unset] bg-stone-800 lg:bg-transparent rounded-lg p-3 transition-all ${showMenu ? "opacity-100 pointer-events-auto mt-0" : "opacity-0 pointer-events-none mt-5"} lg:opacity-100 lg:mt-0 lg:pointer-events-auto`}>
            <ul className="flex flex-col lg:flex-row gap-5 text-center">
              {
                menuData.map((menuItem) => (
                  <li key={menuItem.id}>
                    <button 
                      className="py-2 px-3 text-lg text-white font-kaushan hover:text-yellow-600 relative"
                      onClick={() => console.log(menuItem.link)}
                    >
                      {menuItem.name}
                      <span className="absolute top-[85%] left-3 h-1 bg-yellow-600 hidden" style={{ width: "calc(100% - 24px)" }} />
                    </button>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}