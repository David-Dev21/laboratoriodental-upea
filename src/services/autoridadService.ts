interface Autoridad {
  id_autoridad: number;
  foto_autoridad: string;
  nombre_autoridad: string;
  cargo_autoridad: string;
  facebook_autoridad: string;
  celular_autoridad: string;
  twiter_autoridad: string;
}

const BASE_URL = 'https://serviciopagina.upea.bo';

export const getAutoridades = async (): Promise<Autoridad[]> => {
  const response = await fetch(`${BASE_URL}/api/AutoridadAll/34`);
  const data = await response.json();
  return data;
};

export const getImageUrl = (fotoAutoridad: string): string => {
  return `${BASE_URL}/InstitucionUpea/Autoridad/${fotoAutoridad}`;
};