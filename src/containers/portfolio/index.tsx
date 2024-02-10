// CONSTANTs
import { styles } from "../../constants/styles";
import { images } from "../../constants/images";

const image_config = "h-full object-cover object-center";

export function PortfolioContainer() {
  return (
    <section className={styles.section_secondary} id="portfolio">  
      <div className={styles.container_page}>
        <div className={styles.container_1280}>
          <div className="mb-16">
            <h3 className="text-5xl text-white font-kaushan text-center mb-5 uppercase leading-[68px]">
              OUR <span className="font-kaushan text-yellow-600">PORTFOLIO</span>
            </h3>
            <p className={`${styles.text_primary} max-w-[768px] mx-auto text-center`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className="grid grid-cols-2 grid-rows-14 md:grid-cols-4 md:grid-rows-9 lg:grid-cols-6 lg:grid-rows-6 gap-8 h-[2056px] md:h-[1356px] lg:h-[856px]">
            <img src={images.portfolio_top_one} className={`col-span-2 ${image_config}`} />
            <img src={images.portfolio_top_two} className={`col-span-2 row-span-2 md:row-start-2 ${image_config}`} />
            <img src={images.portfolio_top_three} className={`col-span-2 row-span-3 ${image_config}`} />
            <img src={images.portfolio_top_four} className={`col-span-2 ${image_config}`} />
            <img src={images.portfolio_top_five} className={`col-span-2 ${image_config}`} />
            <img src={images.portfolio_top_six} className={`col-span-2 ${image_config}`} />
            <img src={images.portfolio_bottom_one} className={`row-span-2 md:row-span-3 ${image_config}`} />
            <img src={images.portfolio_bottom_two} className={`row-span-2 md:col-span-3 md:row-span-3 ${image_config}`} />
            <img src={images.portfolio_bottom_three} className={`col-span-2  row-span-3 md:row-start-4 md:col-start-3 lg:col-start-5 ${image_config}`} />
          </div>
        </div>
      </div>
    </section>  
  );
}
