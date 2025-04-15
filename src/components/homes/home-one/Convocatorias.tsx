"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getConvocatorias } from "@/services/convocatoriasService";
import Loading from "@/components/common/Loading";

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

const Convocatorias = () => {
  const [convocatorias, setConvocatorias] = useState<Convocatoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>(
    []
  );

  const toggleDescription = (id: number) => {
    setExpandedDescriptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getConvocatorias();
        setConvocatorias(data);
      } catch (error) {
        console.error("Error loading convocatorias:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getImageUrl = (imagePath: string) => {
    return `https://serviciopagina.upea.bo/Convocatorias/${imagePath}`;
  };

  const renderSection = (title: string, items: Convocatoria[]) => (
    <div className="container pd-top-80">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7">
          <div className="section-title text-center">
            <h2 className="title">{title}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row justify-content-center">
            {items.map((conv) => (
              <div key={conv.idconvocatorias} className="col-md-4">
                <div className="single-blog-inner">
                  <div className="thumb">
                    <Image
                      src={getImageUrl(conv.con_foto_portada)}
                      alt={conv.con_titulo}
                      width={500}
                      height={300}
                      unoptimized
                    />
                    <span className="date text-white">
                      {new Date(conv.con_fecha_inicio).toLocaleDateString(
                        "es-ES"
                      )}
                    </span>
                  </div>
                  <div className="details">
                    <ul className="blog-meta">
                      <li>
                        <i className="fa fa-tag"></i>{" "}
                        {conv.tipo_conv_comun.tipo_conv_comun_titulo}
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i>{" "}
                        {new Date(conv.con_fecha_fin).toLocaleDateString(
                          "es-ES"
                        )}
                      </li>
                    </ul>
                    <h5>{conv.con_titulo}</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: expandedDescriptions.includes(
                          conv.idconvocatorias
                        )
                          ? conv.con_descripcion
                          : conv.con_descripcion.length > 150
                          ? conv.con_descripcion.substring(0, 150) + "..."
                          : conv.con_descripcion,
                      }}
                    />
                    {conv.con_descripcion.length > 150 && (
                      <a
                        onClick={() => toggleDescription(conv.idconvocatorias)}
                        className="read-more-text"
                        style={{ cursor: "pointer" }}
                      >
                        {expandedDescriptions.includes(conv.idconvocatorias)
                          ? "Ver menos"
                          : "Ver más"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <Loading />;
  }

  // Filtrar convocatorias por tipo
  const comunicados = convocatorias.filter(
    (conv) => conv.tipo_conv_comun.tipo_conv_comun_titulo === "COMUNICADOS"
  );
  const convocatoriasItems = convocatorias.filter(
    (conv) => conv.tipo_conv_comun.tipo_conv_comun_titulo === "CONVOCATORIAS"
  );
  const avisos = convocatorias.filter(
    (conv) => conv.tipo_conv_comun.tipo_conv_comun_titulo === "AVISOS"
  );

  return (
    <div className="blog-area pd-top-80 pd-bottom-90">
      {/* Sección de Comunicados */}
      {comunicados.length > 0 && (
        <div className="pd-top-40">
          {renderSection("Comunicados", comunicados)}
        </div>
      )}

      {/* Sección de Avisos */}
      {avisos.length > 0 && (
        <div className="pd-top-50">{renderSection("Avisos", avisos)}</div>
      )}

      {/* Sección de Convocatorias */}
      {convocatoriasItems.length > 0 && (
        <div className="pd-top-60">
          {renderSection("Convocatorias", convocatoriasItems)}
        </div>
      )}
    </div>
  );
};

export default Convocatorias;
