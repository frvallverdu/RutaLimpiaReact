export type Producto = {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
};

const productos: Producto[] = [
  {
    id: 1,
    titulo: "Contenedor Reciclaje 120L",
    descripcion: "Contenedor resistente con ruedas para separar residuos.",
    precio: 25000,
    imagen: "/img/contenedor120l.webp",
  },
  {
    id: 2,
    titulo: "Bolsas Biodegradables (x20)",
    descripcion: "Bolsas compostables a base de almidón de maíz.",
    precio: 3500,
    imagen: "/img/bolsas_bio.jpg",
  },
  {
    id: 3,
    titulo: "Compostera Doméstica 80L",
    descripcion: "Ideal para jardín o terraza, acelera la descomposición orgánica.",
    precio: 42000,
    imagen: "/img/compostera.webp",
  },
  {
    id: 4,
    titulo: "Set 3 Basureros Clasificadores",
    descripcion: "Set de papeleras para separar plástico, papel y vidrio.",
    precio: 18000,
    imagen: "/img/set_papeleras.jpg",
  },
  {
    id: 5,
    titulo: "Prensa Manual para Latas",
    descripcion: "Compacta latas de aluminio para optimizar espacio.",
    precio: 12500,
    imagen: "/img/prensa_latas.jpg",
  },
  {
    id: 6,
    titulo: "Trituradora de Papel Manual",
    descripcion: "Tritura documentos sin electricidad.",
    precio: 15900,
    imagen: "/img/trituradora.webp",
  },
];

export default productos;
