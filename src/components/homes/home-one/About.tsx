"use client";
import Image from "next/image";
import bannerThumb from "@/assets/img/icon/4.png";
import { useEffect, useState } from "react";
import { getInstitucionData } from "@/services/institucionService";
import Loading from "@/components/common/Loading";

const About = () => {
  const [institucionData, setInstitucionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInstitucionData();
        setInstitucionData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!institucionData) {
    return <Loading></Loading>;
  }

  return (
    <div className="about-area pd-top-140">
      <div className="container">
        <div className="about-area-inner">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-wrap left-icon"
                style={{
                  backgroundImage: `url(/assets/img/about/laboratorio-1.jpg)`,
                }}
              >
                <div className="about-icon">
                  <Image src={bannerThumb} alt="icono laboratorio dental" />
                </div>
                <div className="bottom-content">
                  Formando profesionales en prótesis dental desde 1993
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-inner-wrap pl-xl-4 pt-5 pt-lg-0 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h6 className="sub-title right-line">NUESTRA CARRERA</h6>
                  <h2 className="title">Laboratorio Dental UPEA</h2>

                  <h4 className="mt-4 mb-3">Objetivo</h4>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: institucionData.institucion_objetivos,
                    }}
                  />

                  <h4 className="mt-4 mb-3">Misión</h4>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: institucionData.institucion_mision,
                    }}
                  />

                  <h4 className="mt-4 mb-3">Visión</h4>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: institucionData.institucion_vision,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
