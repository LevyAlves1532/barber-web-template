// COMPONENTs
import { Button } from "../../components/button";

// CONSTANTs
import { styles } from "../../constants/styles";
import { images } from "../../constants/images";

export function AboutContainer() {
  return (
    <section className={`${styles.section_secondary} pt-32`} id="about">
      <div className={styles.container_page}>
        <div className={`${styles.container_1280} flex flex-col md:flex-row items-center gap-10`}>
          <div className="flex-1 relative">
            <img 
              src={images.about_image_barber} 
              width={600} 
              height={720} 
              className="relative z-[2] w-11/12 md:w-full"
              alt="About Image" 
            />
            <span className="absolute -top-10 right-0 md:-right-10 w-11/12 md:w-full h-full border-2 border-yellow-800 block z-[1]" />
          </div>

          <div className="flex-1 md:ml-16">
            <h3 className="text-5xl text-white font-kaushan mx-auto text-center md:mx-0 md:text-left mb-5 max-w-[359px] uppercase leading-[68px]">
              YOUR <span className="font-kaushan text-yellow-800">NEW{" "}</span>
              PERFECT STYLE
            </h3>
            <p className={`${styles.text_primary} mb-3 text-center md:text-left`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className={`${styles.text_primary} mb-10 text-center md:text-left`}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Button style="hover:bg-white group w-full sm:w-fit mx-auto md:mx-0 block">
              <p className={`text-lg font-medium text-white ${styles.effect} group-hover:text-yellow-800`}>View Services</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
