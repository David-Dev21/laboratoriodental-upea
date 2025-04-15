"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getAutoridades, getImageUrl } from "@/services/autoridadService";
import Loading from "@/components/common/Loading";

const setting = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

interface Autoridad {
  id_autoridad: number;
  foto_autoridad: string;
  nombre_autoridad: string;
  cargo_autoridad: string;
  facebook_autoridad: string;
  celular_autoridad: string;
  twiter_autoridad: string;
}

const Team = () => {
  const [autoridades, setAutoridades] = useState<Autoridad[]>([]);

  useEffect(() => {
    const fetchAutoridades = async () => {
      try {
        const data = await getAutoridades();
        setAutoridades(data);
      } catch (error) {
        console.error("Error fetching autoridades:", error);
      }
    };

    fetchAutoridades();
  }, []);

  if (autoridades.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <div className="team-area pd-top-110">
      <div className="container-fluid pl-4 pr-4">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center">
              <h6 className="sub-title double-line">Nuestro Equipo</h6>
              <h2 className="title">Docentes Especialistas</h2>
            </div>
          </div>
        </div>
        <Slider {...setting} className="team-slider">
          {autoridades.map((item) => (
            <div key={item.id_autoridad} className="item">
              <div className="single-team-inner position-relative">
                <div className="thumb">
                  <img
                    src={getImageUrl(item.foto_autoridad)}
                    alt={item.nombre_autoridad}
                  />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <Link className="social-share text-white" href="#">
                        <i className="fa fa-share-alt"></i>
                      </Link>
                      <ul>
                        {item.facebook_autoridad && (
                          <li>
                            <Link href={item.facebook_autoridad}>
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                        )}
                        {item.twiter_autoridad && (
                          <li>
                            <Link href={item.twiter_autoridad}>
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4>
                    <Link href={`#`}>{item.nombre_autoridad}</Link>
                  </h4>
                  <span>{item.cargo_autoridad}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
