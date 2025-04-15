import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="banner-area banner-area-1 bg-gray bg-overlay pd-top-140 pd-bottom-90"
      style={{ backgroundImage: `url(/assets/img/upea-1.jpg)` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
            <div className="thumb b-animate-thumb">
              <Image
                src="/assets/img/upea-1.jpg"
                alt="Laboratorio Dental UPEA"
                width={700}
                height={800}
              />
            </div>
          </div>
          <div className="col-lg-7 order-lg-1 align-self-center">
            <div className="banner-inner text-center text-lg-left mt-5 mt-lg-0">
              <h6 className="b-animate-1 sub-title">
                CARRERA DE TECNOLOGÍA EN LABORATORIO DENTAL
              </h6>
              <h1 className="b-animate-2 title">
                Formando profesionales en Prótesis Dental
              </h1>
              <Link
                className="ed-btn btn-base b-animate-3 btn-gap text-white"
                href="/contactos"
              >
                Contáctanos
              </Link>
              <Link
                className="ed-btn btn-border-white b-animate-3 text-white"
                href="/nuestra-carrera"
              >
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
