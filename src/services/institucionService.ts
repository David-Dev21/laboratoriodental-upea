interface InstitucionData {
  institucion_id: number;
  id_carrera: number;
  institucion_nombre: string;
  institucion_iniciales: string;
  institucion_logo: string;
  institucion_historia: string;
  institucion_sobre_ins: string;
  institucion_objetivos: string;
  institucion_mision: string;
  institucion_vision: string;
}

export const getInstitucionData = async (): Promise<InstitucionData> => {
  const response = await fetch('https://serviciopagina.upea.bo/api/InstitucionUPEA/34');
  const data = await response.json();
  return data.Descripcion;
};