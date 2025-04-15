import Link from "next/link"

const HeaderTopOne = () => {
   return (
      <div className="navbar-top">
         <div className="container">
            <div className="row">
               <div className="col-md-8 text-md-left text-center">
                  <ul>
                     <li><p><i className="fa fa-map-marker"></i> 2072 Pinnickinick Street, WA 98370</p></li>
                     <li><p><i className="fa fa-envelope-o"></i>  info@website.com</p></li>
                  </ul>
               </div>
               <div className="col-md-4">
                  <ul className="topbar-right text-md-right text-center">
                     <li className="social-area">
                        <Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                        <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                        <Link href="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                        <Link href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopOne;
