// LIBs
import { HTMLInputTypeAttribute } from "react";

// CONSTANTs
import { styles } from "../../constants/styles";

export interface IInputProps {
  style?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChangeText?: (text: string) => void;
}

export function Input({ style, type, value, placeholder, readOnly, onChangeText }: IInputProps) {
  return (
    <input 
      type={type} 
      value={value}
      className={`${style} ${styles.effect} p-5 bg-transparent outline-0 border-2 border-white/20 placeholder:text-white text-lg text-white hover:border-white/40 focus:border-white/60`} 
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={event => onChangeText && onChangeText(event.target.value)}
    />
  );
}
