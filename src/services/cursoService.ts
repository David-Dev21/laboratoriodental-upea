export interface Facilitador {
  // Add facilitador properties if needed
}

export interface TipoCurso {
  tipo_conv_curso_nombre: string;
  tipo_conv_curso_estado: string;
}

export interface Curso {
  iddetalle_cursos_academicos: number;
  det_img_portada: string;
  det_titulo: string;
  det_descripcion: string;
  det_costo: number;
  det_costo_ext: number;
  det_costo_profe: number;
  det_cupo_max: number;
  det_carga_horaria: number;
  det_lugar_curso: string;
  det_modalidad: string;
  det_fecha_ini: string;
  det_fecha_fin: string;
  det_codigo: string;
  det_hora_ini: string;
  det_grupo_whatssap: string;
  det_version: string;
  det_estado: string;
  idtipo_curso_otros: number;
  tipo_curso_otro: TipoCurso;
  facilitadores: Facilitador[];
}

const API_BASE_URL = 'https://serviciopagina.upea.bo/api';

export const getCursos = async (): Promise<Curso[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/cursosAll/9`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching cursos:', error);
    throw error;
  }
};

export const getImageUrl = (imagePath: string): string => {
  return `https://serviciopagina.upea.bo/Cursos/${imagePath}`;
};