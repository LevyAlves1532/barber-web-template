// LIBs
import { ReactNode } from "react";

export interface IButtonProps {
  children?: ReactNode;
  onClick?: any;
  style?: string;
}

export function Button({ children, onClick, style }: IButtonProps) {
  return (
    <button className={`py-5 px-10 border-[1px] border-white transition-all ease-linear duration-[0.5s] ${style}`} onClick={() => onClick && onClick()}>
      {children}
    </button>
  );
}
