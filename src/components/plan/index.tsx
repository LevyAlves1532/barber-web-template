// CONSTANTs
import { ICreatePlansItemBenefitTypes } from "../../constants/data";
import { images } from "../../constants/images";
import { styles } from "../../constants/styles";

export interface IPlanDataTypes {
  title: string;
  price: number;
  benefits: ICreatePlansItemBenefitTypes[];
  recomended: boolean;
}

export interface IPlanProps {
  plan: IPlanDataTypes;
  style?: string;
}

export function Plan({ plan, style }: IPlanProps) {
  return (
    <div className={`${style} bg-stone-900 ring-2 ${styles.effect} group ${plan.recomended ? "ring-yellow-600 hover:ring-white" : "ring-transparent hover:ring-yellow-600"}`}>
      <div className={`bg-yellow-600 p-2 text-center ${styles.effect} ${plan.recomended ? "group-hover:bg-white" : ""}`}>
        <p className={`text-lg text-white font-kaushan ${styles.effect} ${plan.recomended ? "group-hover:text-yellow-600" : ""}`}>{plan.title}</p>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-5">
          <img src={images.plan_card_icon} width={62} height={62} alt="" />
          <div>
            <p className="text-lg text-white font-kaushan">Price Plan:</p>
            <p className="text-white font-light"><span className="text-yellow-600">${plan.price.toFixed(2)}</span> / Months</p>
          </div>
        </div>

        {
          plan.benefits.map((planBenefit, index) => (
            <div className={index !== (plan.benefits.length - 1) ? "mb-5" : "mb-0"} key={planBenefit.id}>
              <div className="flex gap-3 items-center mb-3">
                <p className="text-lg text-white font-kaushan">{planBenefit.label}</p>
                <span className="flex-1 h-[1px] bg-yellow-600" />
                <p 
                  className="text-white plan-benefits-item"
                  dangerouslySetInnerHTML={{
                    __html: planBenefit.month,
                  }}
                />
              </div>

              <p className="text-xs text-white/80">{planBenefit.short_description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
