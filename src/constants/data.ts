const generateId = () => Math.random() * 9999;

const createMenuItem = (name: string, link?: string) => ({
  id: generateId(),
  name,
  link: link ? link : name.toLowerCase(),
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
