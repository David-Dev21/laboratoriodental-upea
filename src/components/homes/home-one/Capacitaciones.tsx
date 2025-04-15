"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/components/common/Loading";
import { getCursos, getImageUrl } from "@/services/cursoService";
import type { Curso } from "@/services/cursoService";

const Capacitaciones = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
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
    const fetchCursos = async () => {
      try {
        const data = await getCursos();
        setCursos(data);
      } catch (error) {
        console.error("Error loading cursos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCursos();
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const renderCursos = (items: Curso[]) => (
    <div className="container pd-top-140 pd-bottom-90">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7">
          <div className="section-title text-center">
            <h2 className="title">Cursos y Seminarios</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="row justify-content-center">
            {items.map((curso) => (
              <div key={curso.iddetalle_cursos_academicos} className="col-md-4">
                <div className="single-blog-inner">
                  <div className="thumb">
                    <Image
                      src={getImageUrl(curso.det_img_portada)}
                      alt={curso.det_titulo}
                      width={500}
                      height={300}
                      unoptimized
                    />
                    <span className="date text-white">
                      {new Date(curso.det_fecha_ini).toLocaleDateString(
                        "es-ES"
                      )}
                    </span>
                  </div>
                  <div className="details">
                    <ul className="blog-meta">
                      <li>
                        <i className="fa fa-clock-o"></i>{" "}
                        {curso.det_carga_horaria}h
                      </li>
                      <li>
                        <i className="fa fa-money"></i> Bs. {curso.det_costo}
                      </li>
                      <li>
                        <i className="fa fa-users"></i> Cupos:{" "}
                        {curso.det_cupo_max}
                      </li>
                    </ul>
                    <h5>{curso.det_titulo}</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: expandedDescriptions.includes(
                          curso.iddetalle_cursos_academicos
                        )
                          ? curso.det_descripcion
                          : curso.det_descripcion.length > 150
                          ? curso.det_descripcion.substring(0, 150) + "..."
                          : curso.det_descripcion,
                      }}
                    />
                    {curso.det_descripcion.length > 150 && (
                      <a
                        onClick={() =>
                          toggleDescription(curso.iddetalle_cursos_academicos)
                        }
                        className="read-more-text"
                        style={{ cursor: "pointer" }}
                      >
                        {expandedDescriptions.includes(
                          curso.iddetalle_cursos_academicos
                        )
                          ? "Ver menos"
                          : "Ver más"}
                      </a>
                    )}
                  </div>
                  <div className="meta-bottom d-flex justify-content-around">
                    <div>
                      <span>
                        <i className="fa fa-map-marker"></i>{" "}
                        {curso.det_modalidad}
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa fa-clock-o"></i> {curso.det_hora_ini}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return <div className="pd-top-40">{renderCursos(cursos)}</div>;
};

export default Capacitaciones;
