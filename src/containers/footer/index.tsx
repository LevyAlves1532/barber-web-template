// CONSTANTs
import { styles } from "../../constants/styles";
import { images } from "../../constants/images";

// ICONs
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const title = "text-lg font-kaushan uppercase text-white mb-2 whitespace-nowrap";
const text_primary = "uppercase text-white/60";
const text_secondary = "text-white/60";
const icon = `${styles.effect} text-2xl text-yellow-600 hover:rotate-[360deg]`;

export function FooterContainer() {
  return (
    <footer>
      <div className={styles.section_primary}>
        <div className={styles.container_page}>
          <div className="max-w-[1024px] w-full px-5 mx-auto">
            <div className="flex flex-col items-center md:flex-row md:items-start md:flex-wrap gap-8">
              <div className="min-w-[138px] flex-1">
                <img src={images.logo_footer} width={138} alt="Logo of the Footer" />
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col">
                <p className={title}>Open</p>
                <span className={text_primary}>Monday - Friday</span>
                <span className={text_primary}>9 AM - 6 PM</span>
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col">
                <p className={title}>OUR BRANCHES</p>
                <span className={text_secondary}>4042 Imperial Road. UK City</span>
                <span className={text_secondary}>3202 Nottingham Road. UK City</span>
                <span className={text_secondary}>3843 London Road. UK City</span>
              </div>

              <div className="flex-1 flex flex-col text-center md:text-left">
                <p className={title}>FOLLOW US</p>
                <div className="flex justify-center md:justify-start items-center gap-3">
                  <a href="https://www.instagram.com/" target="_blank">
                    <FiInstagram className={icon} />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <FiFacebook className={icon} />
                  </a>
                  <a href="https://twitter.com/" target="_blank">
                    <FiTwitter className={icon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-7 text-center bg-stone-900">
        <p className="text-xs text-white">
          Todos os Direitos Autorais Reservados - @alvescodin - 2024 - 2034 
        </p>
      </div>
    </footer>
  );
}
