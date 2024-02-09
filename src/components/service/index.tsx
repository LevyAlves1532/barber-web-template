// CONSTANTs
import { styles } from "../../constants/styles";

export interface IServiceDataTypes {
  icon: string;
  title: string;
  short_description: string;
}

export interface IServiceProps {
  service: IServiceDataTypes;
  className?: string;
}

export function Service({ service, className }: IServiceProps) {  
  return (
    <div className={`p-5 bg-stone-900 flex flex-col items-center group ${className}`}>
      <img src={service.icon} width={100} height={100} className="mb-5" alt="Service Icon" />
      <p className="text-lg text-white font-kaushan mb-3 uppercase">{service.title}</p>
      <span className={`${styles.text_primary} text-center mb-8`}>{service.short_description}</span>
      <button className={`${styles.effect} text-lg text-yellow-800 font-kaushan group-hover:text-yellow-600`}>Add Service +</button>
    </div>
  );
}
