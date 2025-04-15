import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer-area bg-gray">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <Image
                    src="/assets/img/logo-laboratorio-dental.jpg"
                    alt="UPEA Laboratorio Dental"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="details">
                  <p>
                    Formando profesionales con excelencia en Prótesis Dental
                  </p>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61551715456998"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@tec.laboratorio.dental_"
                        target="_blank"
                      >
                        <i className="fa fa-tiktok"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=tecnologia+en+laboratorio+dental+upea"
                        target="_blank"
                      >
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Enlaces Rápidos</h4>
                <ul>
                  <li>
                    <a href="/nuestra-carrera">Acerca de Nosotros</a>
                  </li>
                  <li>
                    <a href="/comunicados">Comunicados</a>
                  </li>
                  <li>
                    <a href="/capacitaciones">Capacitaciones</a>
                  </li>
                  <li>
                    <a href="/contact">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_contact">
                <h4 className="widget-title">Contáctanos</h4>
                <ul className="details">
                  <li>
                    <i className="fa fa-map-marker"></i> Av. Sucre B, Villa
                    Esperanza
                    <br />
                    El Alto, La Paz - Bolivia
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> +591 2 2844177
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> lab.dental@upea.edu.bo
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_schedule">
                <h4 className="widget-title">Horario de Atención</h4>
                <ul className="details">
                  <li>Turno Mañana: 8:00 - 12:00</li>
                  <li>Turno Tarde: 14:00 - 18:00</li>
                  <li>Sábado y Domingo: Cerrado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            <p className="mx-auto pt-2">
              <a href="https://utic.upea.bo/" target="_blank">
                ©U-TIC 2025
              </a>{" "}
              | Desarrollado por
              <a
                href="https://www.linkedin.com/in/david-mamani-a3b745352/"
                target="_blank"
                className="ms-2"
              >
                RubenDavidMA
              </a>
              <a
                href="https://github.com/David-Dev21"
                target="_blank"
                className="ms-2"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://wa.me/59179550230"
                target="_blank"
                className="ms-2"
              >
                <i className="fa fa-whatsapp"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
