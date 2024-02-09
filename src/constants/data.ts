// CONSTANTs
import { images } from "./images";

const generateId = () => Math.random() * 9999;

const createMenuItem = (name: string, link?: string) => ({
  id: generateId(),
  name,
  link: link ? link : name.toLowerCase(),
});

export interface ICreatePlansItemBenefitTypes {
  id: number;
  label: string;
  month: string;
  short_description: string;
};

const createPlansItem = (title: string, price: number, benefits: ICreatePlansItemBenefitTypes[], recomended: boolean = false) => ({
  id: generateId(),
  title,
  price,
  benefits,
  recomended,
});

const createPlansItemBenefit = (label: string, qtd_month: number, short_description: string): ICreatePlansItemBenefitTypes => ({
  id: generateId(),
  label,
  month: qtd_month > 0 ? `<span>${qtd_month}x</span> In the month` : `<span>None</span> month`,
  short_description,
});

const createServiceItem = (icon: string, title: string, short_description: string) => ({
  id: generateId(),
  icon,
  title,
  short_description,
});

export const menuData = [
  createMenuItem("Home"),
  createMenuItem("Plans"),
  createMenuItem("About"),
  createMenuItem("Services"),
  createMenuItem("Portfolio"),
  createMenuItem("Testimonial"),
  createMenuItem("Schedule"),
];

export const plansData = [
  createPlansItem("Plan Style Basic", 5, [
    createPlansItemBenefit("Classic Haircut", 2, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createPlansItemBenefit("Classic Barber", 1, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createPlansItemBenefit("Effects Hair", 0, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  ]),
  createPlansItem("Plan Style Medium", 15, [
    createPlansItemBenefit("Classic Haircut", 3, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createPlansItemBenefit("Classic Barber", 2, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createPlansItemBenefit("Effects Hair", 1, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  ], true),
  createPlansItem("Plan Style Medium", 30, [
    createPlansItemBenefit("Classic Haircut", 4, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createPlansItemBenefit("Classic Barber", 3, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    createPlansItemBenefit("Effects Hair", 2, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  ]),
];

export const servicesData = [
  createServiceItem(images.services_card_icon, "HAIRCUT", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  createServiceItem(images.services_card_icon, "BEARD", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  createServiceItem(images.services_card_icon, "straightening", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  createServiceItem(images.services_card_icon, "LIGHTS", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  createServiceItem(images.services_card_icon, "straightening", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
  createServiceItem(images.services_card_icon, "LIGHTS", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
]
