interface Convocatoria {
  idconvocatorias: number;
  con_foto_portada: string;
  con_titulo: string;
  con_descripcion: string;
  con_estado: string;
  con_fecha_inicio: string;
  con_fecha_fin: string;
  tipo_conv_comun: {
    idtipo_conv_comun: number;
    tipo_conv_comun_titulo: string;
    tipo_conv_comun_estado: string;
  };
}

export const getConvocatorias = async (): Promise<Convocatoria[]> => {
  try {
    const response = await fetch('https://serviciopagina.upea.bo/api/convocatoriasAll/9');
    if (!response.ok) {
      throw new Error('Failed to fetch convocatorias');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching convocatorias:', error);
    return [];
  }
}