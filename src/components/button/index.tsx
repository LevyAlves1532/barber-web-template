// LIBs
import { ReactNode } from "react";

// CONSTANTs
import { styles } from "../../constants/styles";

export interface IButtonProps {
  children?: ReactNode;
  onClick?: any;
  style?: string;
}

export function Button({ children, onClick, style }: IButtonProps) {
  return (
    <button className={`py-5 px-10 border-[1px] border-white ${styles.effect} ${style}`} onClick={() => onClick && onClick()}>
      {children}
    </button>
  );
}
