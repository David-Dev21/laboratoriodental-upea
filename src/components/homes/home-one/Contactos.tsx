import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icon/16.png";
import icon_2 from "@/assets/img/icon/17.png";
import icon_3 from "@/assets/img/icon/18.png";

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
  address: JSX.Element;
}

const contact_data: DataType[] = [
  {
    id: 1,
    icon: icon_1,
    title: "Dirección",
    address: (
      <>
        <p>Av. Sucre B, Villa Esperanza</p>
        <p>El Alto - Bolivia</p>
      </>
    ),
  },
  {
    id: 2,
    icon: icon_2,
    title: "Teléfonos de Contacto",
    address: (
      <>
        <p>+591 2 2844177</p>
      </>
    ),
  },
  {
    id: 3,
    icon: icon_3,
    title: "Correo Electrónico",
    address: (
      <>
        <p>lab.dental@upea.edu.bo</p>
      </>
    ),
  },
];

const Contact = () => {
  return (
    <div
      className="contact-area bg-overlay pd-top-140 pd-bottom-90"
      style={{ backgroundImage: `url(/assets/img/upea-1.jpg)` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center">
              <h6 className="sub-title double-line text-white">
                Información de Contacto
              </h6>
              <h2 className="title text-white">Contáctanos</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="contact-info-wrap">
              {contact_data.map((item) => (
                <div
                  key={item.id}
                  className="single-contact-info-wrap style-2 text-center mb-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "10px",
                    padding: "20px",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <div className="icon">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="details">
                    <h6>{item.title}</h6>
                    {item.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="map-wrap"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.7086968575165!2d-68.19389745943143!3d-16.491498938986837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ede3378ea9d6d%3A0x26cac4a2caefcb29!2sUniversidad%20P%C3%BAblica%20de%20El%20Alto!5e0!3m2!1ses!2sbo!4v1710437546724!5m2!1ses!2sbo"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
