"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPublicaciones } from "@/services/blogService";
import { PublicacionAPI } from "@/types/blog";
import Loading from "@/components/common/Loading";

const Blog = () => {
  const [publicaciones, setPublicaciones] = useState<PublicacionAPI[]>([]);
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
        const data = await getPublicaciones();
        setPublicaciones(data);
      } catch (error) {
        console.error("Error loading publicaciones:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getImageUrl = (imagePath: string) => {
    return `https://serviciopagina.upea.bo/Publicaciones/${imagePath}`;
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="blog-area pd-top-80 pd-bottom-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center">
              <h6 className="sub-title double-line">Últimas Noticias</h6>
              <h2 className="title">Noticias y Artículos</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="row justify-content-center">
              {publicaciones.map((pub) => (
                <div key={pub.publicaciones_id} className="col-md-6">
                  <div className="single-blog-inner">
                    <div className="thumb">
                      <Image
                        src={getImageUrl(pub.publicaciones_imagen)}
                        alt={pub.publicaciones_titulo}
                        width={500}
                        height={300}
                        unoptimized
                      />
                      <span className="date text-white">
                        {new Date(pub.publicaciones_fecha).toLocaleDateString(
                          "es-ES"
                        )}
                      </span>
                    </div>
                    <div className="details">
                      <ul className="blog-meta">
                        <li>
                          <i className="fa fa-user"></i>{" "}
                          {pub.publicaciones_autor || "DOCENTE"}
                        </li>
                        <li>
                          <i className="fa fa-folder-open-o"></i>{" "}
                          {pub.publicaciones_tipo}
                        </li>
                      </ul>
                      <h5>{pub.publicaciones_titulo}</h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: expandedDescriptions.includes(
                            pub.publicaciones_id
                          )
                            ? pub.publicaciones_descripcion
                            : pub.publicaciones_descripcion.length > 150
                            ? pub.publicaciones_descripcion.substring(0, 150) +
                              "..."
                            : pub.publicaciones_descripcion,
                        }}
                      />
                      {pub.publicaciones_descripcion.length > 150 && (
                        <a
                          onClick={() =>
                            toggleDescription(pub.publicaciones_id)
                          }
                          className="read-more-text"
                          style={{ cursor: "pointer" }}
                        >
                          {expandedDescriptions.includes(pub.publicaciones_id)
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
    </div>
  );
};

export default Blog;
