// LIBs
import { useContext, createContext, ReactNode, useState, SetStateAction, Dispatch } from "react";

// CONSTANTs
import { servicesData } from "../constants/data";

export interface IScheduleServiceTypes {
  id: number;
  icon: string;
  title: string;
  short_description: string;
}

export type ScheduleService = IScheduleServiceTypes | null;

export interface IFormScheduleContextTypes {
  name: string;
  phone: string;
  service: ScheduleService;
  setName: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  changeService: (id: number | null) => void;
}

const FormScheduleContext = createContext<IFormScheduleContextTypes | undefined>(undefined);

interface IFormScheduleProviderProps {
  children: ReactNode;
}

export function FormScheduleProvider({ children }: IFormScheduleProviderProps) {
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ service, setService ] = useState<ScheduleService>(null);

  const changeService = (id: number | null) => {
    const newService = servicesData.find(service => service.id === id);
    if (newService) {
      setService(newService);
    } else {
      setService(null);
    }
  }

  return (
    <FormScheduleContext.Provider value={{ name, phone, service, setName, setPhone, changeService }}>
      {children}
    </FormScheduleContext.Provider>
  );
}

export function useFormSchedule() {
  const context = useContext(FormScheduleContext);
  if (!context) {
    throw new Error('useFormSchedule must be used inside a FormScheduleProvider');
  }
  return context;
}
