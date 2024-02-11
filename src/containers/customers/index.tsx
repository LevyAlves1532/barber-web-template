// LIBs
import { useRef } from "react";
import Slider from "react-slick";

// COMPONENTs
import { Customer } from "../../components/customer";

// CONSTANTs
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { testimonialsData } from "../../constants/data";

// ICONs
import { styles } from "../../constants/styles";

export function CustomersContainer() {
  const sliderRef = useRef<any>();

  return (
    <section className={styles.section_primary} id="testimonial">
      <div className={styles.container_page}>
        <div className="max-w-[1024px] w-full px-5 mx-auto">
          <div className="md:flex items-end justify-between mb-10">
            <div className="flex gap-3">
              <span className={styles.bar} />

              <div className="max-w-[470px] w-full">
                <h4 className={styles.title_primary}>
                  WHAT OUR CUSTOMERS SAY
                </h4>
                <p className={styles.text_primary}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>

            <div className="flex gap-5 pt-8 pl-16 md:pl-0">
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
              slidesToShow={2.3}
              slidesToScroll={1}
              infinite={false}
              arrows={false}
              className="customer-slider"
              ref={sliderRef}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1.3
                  },
                },
                {
                  breakpoint: 450,
                  settings: {
                    slidesToShow: 0.93
                  },
                },
              ]}
            >
              {
                testimonialsData.map(testimonial => (
                  <Customer 
                    testimonial={testimonial}
                    key={testimonial.id}
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
