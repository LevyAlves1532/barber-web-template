// LIBs
import { useRef } from "react";
import Slider from "react-slick";

// COMPONENTs
import { Service } from "../../components/service";

// CONSTANTs
import { styles } from "../../constants/styles";
import { servicesData } from "../../constants/data";

// STYLEs
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ICONs
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export function ServicesContainer() {
  const sliderRef = useRef<any>();

  return (
    <section className={styles.section_primary} id="services">
      <div className={styles.container_page}>
        <div className="max-w-[1024px] w-full px-5 mx-auto">
          <div className="md:flex justify-between items-start  mb-10">
            <div className="max-w-[470px]">
              <h3 className={`${styles.title_primary} leading-[45px] max-w-[273px]`}>OUR SERVICES <span className={`${styles.title_primary} text-yellow-800`}>PAYMENTS</span></h3>
              <p className={styles.text_primary}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>

            <div className="flex gap-5 pt-8">
              <button 
                className={`p-3 rounded-full ${styles.effect} hover:bg-yellow-800`}
                onClick={() => {               
                  sliderRef.current.slickPrev();
                }}
              >
                <FiArrowLeft className="text-2xl text-white" />
              </button>

              <button 
                className={`p-3 rounded-full ${styles.effect} hover:bg-yellow-800`}
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              >
                <FiArrowRight className="text-2xl text-white" />
              </button>
            </div>
          </div>

          <div>
            <Slider
              slidesToShow={4}
              slidesToScroll={1}
              arrows={false}
              className="services-slider"
              ref={sliderRef}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 450,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ]}
            >
              {
                servicesData.map((service, index) => (
                  <Service 
                    service={service}
                    className={index % 2 !== 0 ? "md:mt-10" : "md:mt-0"}
                    key={service.id}
                  />
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
