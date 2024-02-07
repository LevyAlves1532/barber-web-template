// LIBs
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

// CONSTANTs
import { styles } from "../../constants/styles";
import { images } from "../../constants/images";
import { menuData } from "../../constants/data";

// ICONs
import { FiMenu, FiX } from "react-icons/fi";

export function HeaderContainer() {
  const [ showMenu, setShowMenu ] = useState(false);
  const [ focusMenuItem, setFocusMenuItem ] = useState("");
  const [ scrollTop, setScrollTop ] = useState(0);
  const [ bgHeader, setBGHeader ] = useState(false);

  useEffect(() => {
    window.onscroll = scrollPage;
  }, [])

  useEffect(() => {
    changeFocusMenuItem();
    changeBGHeader();

  }, [scrollTop])

  const scrollPage = () => {
    setScrollTop(window.scrollY);
  }

  const changeFocusMenuItem = () => {
    const header = document.querySelector("header")!;
    const sections = document.querySelectorAll("section");

    for (let element of sections) {
      const startOffsetYElement = element.offsetTop - header.clientHeight;
      const endOffsetYElement = element.offsetTop + element.clientHeight - header.clientHeight;

      if (window.scrollY >= startOffsetYElement && window.scrollY < endOffsetYElement) {
        if (element.id && element.id !== focusMenuItem) {
          setFocusMenuItem(element.id);
          break;
        }
      }
    }
  }

  const changeBGHeader = () => {
    const plans = document.querySelector("#plans") as HTMLElement;
    const header = document.querySelector("header")!;

    if (window.scrollY >= (plans.offsetTop - header.clientHeight)) {
      if (!bgHeader) setBGHeader(true);
    } else {
      if (bgHeader) setBGHeader(false);
    }
  }

  return (
    <header className={`w-full fixed top-0 left-0 z-10 ${bgHeader ? "bg-stone-950" : "bg-transparent"}`}>
      <div className={`${styles.container_page} py-5`}>
        <div className="max-w-[1280px] w-full mx-auto px-5 flex justify-between items-center">
          <Link to="home" smooth className="ml-5 cursor-pointer">
            <img src={images.logo} width={111} height={34} alt="logo" />
          </Link>

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
                    <Link 
                      to={menuItem.link}
                      className={`py-2 px-3 text-lg font-kaushan hover:text-yellow-600 ${menuItem.link === focusMenuItem ? "text-yellow-600" : "text-white"} relative cursor-pointer`}
                      smooth
                      onClick={() => {
                        setShowMenu(false);
                      }}
                    >
                      {menuItem.name}
                      { menuItem.link === focusMenuItem &&
                        <span className="absolute top-[85%] left-3 h-1 bg-yellow-600" style={{ width: "calc(100% - 24px)" }} />
                      }
                    </Link>
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