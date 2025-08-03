import { nanoid } from "nanoid";
const footerData = [
  {
    id: 0,
    name: "Men",
    list: [
      { id: nanoid(), label: "Tops", href: "#" },
      { id: nanoid(), label: "Bottoms", href: "#" },
      { id: nanoid(), label: "Ethnics", href: "#" },
      { id: nanoid(), label: "Winterwear", href: "#" },
      { id: nanoid(), label: "Sportwears", href: "#" },
      { id: nanoid(), label: "Grooming", href: "#" },
      { id: nanoid(), label: "Watches", href: "#" },
    ],
  },
  {
    id: 1,
    name: "Women",
    list: [
      { id: nanoid(), label: "Tops", href: "#" },
      { id: nanoid(), label: "Tops", href: "#" },
      { id: nanoid(), label: "Ethnicwears", href: "#" },
      { id: nanoid(), label: "Bottoms", href: "#" },
      { id: nanoid(), label: "Winterwear", href: "#" },
      { id: nanoid(), label: "Lingerie", href: "#" },
      { id: nanoid(), label: "Sportswear", href: "#" },
      { id: nanoid(), label: "Beauty", href: "#" },
    ],
  },
  {
    id: 2,
    name: "About",
    list: [
      { id: nanoid(), label: "About Us", href: "#" },
      { id: nanoid(), label: "Careers", href: "#" },
      { id: nanoid(), label: "Take a Tour", href: "#" },
      { id: nanoid(), label: "Blog", href: "#" },
      { id: nanoid(), label: "Store Locator", href: "#" },
      { id: nanoid(), label: "Landmark Cares", href: "#" },
      { id: nanoid(), label: "Landmark Cares", href: "#" },
      { id: nanoid(), label: "Lifestyle Cares", href: "#" },
    ],
  },
  {
    id: 3,
    name: "Help",
    list: [
      { id: nanoid(), label: "Contact Us", href: "#" },
      { id: nanoid(), label: "Shipping", href: "#" },
      { id: nanoid(), label: "Returns Process", href: "#" },
      { id: nanoid(), label: "Returns Policy", href: "#" },
      { id: nanoid(), label: "Help Centre", href: "#" },
    ],
  },
];

export default footerData;
