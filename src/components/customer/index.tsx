// CONSTANTs
import { styles } from "../../constants/styles";

// ICONs
import { FiStar } from "react-icons/fi";

export interface ITestimonialTypes {
  profile: string;
  name: string;
  rating: number;
  message: string;
}

export interface ICustomerProps {
  testimonial: ITestimonialTypes;
}

export function Customer({ testimonial }: ICustomerProps) {
  return (
    <div className="bg-stone-900 p-5 flex">
      <div className="mr-5">
        <img src={testimonial.profile} width={80} height={80} alt="" />
      </div>

      <div className="flex-1 pt-5">
        <p className="text-lg font-kaushan text-white">{testimonial.name}</p>
        <p className="flex items-center gap-2 text-yellow-600 mb-3">
          <FiStar />
          {testimonial.rating.toFixed(2)}
        </p>
        <span className={styles.text_primary}>{testimonial.message}</span>
      </div>
    </div>
  );
}
