import type { CatalogProduct } from "@/types/api/product";

export const demoProducts: CatalogProduct[] = [
  {
    id: -1,
    name: "Aguacate Hass",
    description: "Paquete de dos aguacates, ideal para tostadas y ensaladas.",
    price: 6800,
    createdAt: "2025-03-03",
    images: [{ link: "/IMG/aguacate.jpg", isCover: true }],
  },
  {
    id: -2,
    name: "Pan artesanal",
    description: "Pan de corteza crujiente y miga suave, presentado en una pieza de 500 g.",
    price: 9200,
    createdAt: "2025-03-02",
    images: [{ link: "/IMG/pan.jpg", isCover: true }],
  },
  {
    id: -3,
    name: "Corte de res",
    description: "Corte de 500 g para cocinar a la plancha o a la parrilla.",
    price: 24500,
    createdAt: "2025-03-01",
    images: [{ link: "/IMG/carne.jpg", isCover: true }],
  },
];
