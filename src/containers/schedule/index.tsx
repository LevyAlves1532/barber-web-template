// COMPONENTs
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Select } from "../../components/select";

// CONTANTs
import { styles } from "../../constants/styles";
import { images } from "../../constants/images";
import { scheduleData } from "../../constants/data";

// CONTEXTs
import { useFormSchedule } from "../../contexts/form-schedule";

export function ScheduleContainer() {
  const { name, phone, service, setName, setPhone, changeService } = useFormSchedule();

  return (
    <section className={styles.section_secondary} id="schedule">
      <div className={styles.container_page}>
        <div className={`${styles.container_1280} flex flex-col md:flex-row items-center gap-8`}>
          <div className="flex-1 relative">
            <img src={images.schedule_footer} width={604} height={604} alt="Schedule Footer" />
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-stone-900 to-stone-950/0" />
          </div>

          <div className="flex-1" id="testimonial-form">
            <h4 className="text-5xl text-white font-kaushan mx-auto text-center md:mx-0 md:text-left mb-5 max-w-[359px] uppercase leading-[68px]">
              GET IN <span className="text-yellow-600 font-kaushan">TOUCH</span>
            </h4>

            <p className={`${styles.text_primary} mb-10`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <div className="flex flex-col gap-5 mb-10">
              <Input 
                value={name}
                placeholder="Name .:"
                onChangeText={setName}
              />
              <Input 
                value={phone}
                placeholder="Phone .:"
                onChangeText={setPhone}
              />
              <Select 
                options={[ { label: "Services .:", value: "" }, ...scheduleData ]}
                value={service ? `${service.id}` : ""}
                onChangeValue={value => {
                  const id = Number(value);
                  if (id) {
                    changeService(id); 
                  } else {
                    changeService(null);
                  }
                }}
              />
            </div>

            <Button style="hover:bg-white group w-full sm:w-fit mx-auto md:mx-0 block">
              <p className={`text-lg font-medium text-white ${styles.effect} group-hover:text-yellow-800`}>Send Form</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
