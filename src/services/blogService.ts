interface PublicacionAPI {
    publicaciones_id: number;
    publicaciones_titulo: string;
    publicaciones_tipo: string;
    publicaciones_imagen: string;
    publicaciones_descripcion: string;
    publicaciones_fecha: string;
    publicaciones_autor: string;
    publicaciones_documento: string;
}

const BlogConfig = {
    API_URL: 'https://serviciopagina.upea.bo/api/publicacionesAll/34'
} as const;

export async function getPublicaciones(): Promise<PublicacionAPI[]> {
    try {
        const response = await fetch(BlogConfig.API_URL);
        if (!response.ok) {
            throw new Error('Error al obtener las publicaciones');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching publicaciones:', error);
        return [];
    }
}