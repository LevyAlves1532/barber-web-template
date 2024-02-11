// ICONs
import { FiChevronDown } from "react-icons/fi";

export interface ISelectOptionsTypes {
  label: string;
  value: string | number;
}

export interface ISelectProps {
  options: ISelectOptionsTypes[];
  value?: string;
  readOnly?: boolean;
  style?: string;
  onChangeValue?: (value: string) => void;
}

export function Select({ options, value, readOnly, style, onChangeValue }: ISelectProps) {
  return (
    <div className="flex items-center relative">
      <select 
        value={value}
        className={`${style} ${readOnly ? "pointer-events-none" : ""} flex-1 p-5 bg-transparent border-2 border-white/20 outline-0 text-lg text-white appearance-none cursor-pointer`}
        onChange={(event) => !readOnly ? onChangeValue && onChangeValue(event.target.value) : null}
      >
        { options.length > 0 &&
          options.map(option => (
            <option
              value={option.value}
              className="bg-stone-900"
              key={option.value}
            >
              {option.label}
            </option>
          ))
        }
      </select>
      <FiChevronDown className="absolute right-5 text-2xl text-white pointer-events-none" />
    </div>
  );
}
