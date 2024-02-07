// COMPONENTs
import { Plan } from "../../components/plan";

// CONSTANTs
import { styles } from "../../constants/styles";
import { plansData } from "../../constants/data";

export function PlansContainer() {
  return (
    <section className={styles.section_primary} id="plans">
      <div className={styles.container_page}>
        <div className="max-w-[450px] sm:max-w-[1024px] w-full px-5 mx-auto">
          <div className="flex gap-3 mb-10">
            <span className={styles.bar} />

            <div className="max-w-[270px] w-full">
              <h2 className={styles.title_primary}>
                OUR PLANS
              </h2>
              <p className={styles.text_primary}>
                Enjoy a variety of our best plans that will make 
                your value instantly increase
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap">
            {
              plansData.map((plan) => (
                <Plan 
                  plan={plan}
                  style="flex-1"
                  key={plan.id}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
