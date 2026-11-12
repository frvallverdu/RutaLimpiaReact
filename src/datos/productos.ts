export interface Producto {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen: string;
}

export const productos: Producto[] = [
  { id: '1', titulo: 'Bolsas Bio', descripcion: 'Bolsas compostables 100% biodegradables.', categoria: 'Insumos', imagen: '/img/bolsas_bio.jpg' },
  { id: '2', titulo: 'Compostera', descripcion: 'Compostera doméstica para reducir residuos.', categoria: 'Reciclaje', imagen: '/img/compostera.webp' },
  { id: '3', titulo: 'Contenedor 120L', descripcion: 'Contenedor resistente para basura general.', categoria: 'Contenedores', imagen: '/img/contenedor120l.webp' },
  { id: '4', titulo: 'Set Papeleras', descripcion: 'Papeleras modulares para separar reciclaje.', categoria: 'Reciclaje', imagen: '/img/set_papeleras.jpg' },
];
