interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
}[];

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: false,
      title: "Inicio",
      link: "/",
   },
   {
      id: 2,
      has_dropdown: false,
      title: "Nuestra Carrera",
      link: "/nuestra-carrera",
   },
   {
      id: 3,
      has_dropdown: false,
      title: "Comunicados",
      link: "/comunicados",
   },
   {
      id: 4,
      has_dropdown: false,
      title: "Capacitaciones",
      link: "/capacitaciones",
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Contactos",
      link: "/contactos",
   },
   {
      id: 6,
      has_dropdown: true,
      title: "Enlaces",
      link: "#",
      sub_menus: [
         {
            link: "https://matriculacion.upea.bo/6e56c5c3766bda500b0c353c32bfa6d36fc48c6e",
            title: "Matriculación",
         },
         {
            link: "https://inscripcioneslaboratoriodental.upea.bo/",
            title: "Inscripciones",
         },
         {
            link: "#",
            title: "Aula Virtual",
         },
      ]
   },
];
export default menu_data;
