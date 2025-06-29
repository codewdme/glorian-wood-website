import React from "react";
import { scrollToSection } from "../helper";

function Footer() {
  return (
    <footer className="tc-footer-style1">
      <div className="container">
        <div className="top-content section-padding">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div className="info-side">
                <div className="text fsz-24 color-333 lh-3 fw-600">
                  Glorian Wood offers thoughtfully crafted materials that bring
                  design, durability, and functionality together. From premium
                  plywood, decorative laminates, and natural veneers to modular
                  kitchen fittings and architectural hardware, we provide
                  high-quality solutions tailored for homeowners, interior
                  designers, and builders alike.
                </div>
                <div className="foot-social mt-50">
                  {/* <a href="https://glorianwood.com/contact-us/#">
                    <i className="fab fa-facebook-f"></i>
                  </a> */}
                  <a href="https://www.facebook.com/profile.php?id=61577704111928">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/glorianwood?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <i className="fab fa-instagram"></i>
                  </a>
                  {/* <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-2">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 mt-lg-0 fw-600">
                  {" "}
                  Jaipur, Rajasthan{" "}
                </h5>
                <ul className="footer-links">
                  <li>
                    <a href="https://maps.app.goo.gl/g2bYaSJ1xFyxux8m7">
                      Plot 11, Pratap Market, Lalarpura, Gandhi Path West,
                      Vaishali Nagar West, Jaipur.
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@glorianwood.com">
                      {" "}
                      info@glorianwood.com{" "}
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919768667171"> +91-9768667171 </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> OTHER PAGES </h5>
                <ul className="footer-links">
                  <li>
                    <a href="/"> Home </a>
                  </li>
                  <li>
                    <a
                      href="/#about-section-anchor"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("#services-section-anchor");
                      }}
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/#services"> Services </a>
                  </li>
                  <li>
                    <a href="/#contact"> Contact </a>
                  </li>
                </ul>
              </div>
              <div className="branch-card">
                <h5 className="mb-20 mt-5 fw-600"> QUICK LINKS </h5>
                <ul className="footer-links">
                  <li>
                    <a href="https://digital-fry.s3.us-east-1.amazonaws.com/glorian-wood/Glorian_Wood_Terms+%26+Conditions.pdf">
                      {" "}
                      Term & Conditions{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://digital-fry.s3.us-east-1.amazonaws.com/glorian-wood/Glorian_Wood_Privacy_Policy.pdf">
                      {" "}
                      Privacy Policy{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="row">
            <div className="col-lg-6">
              <p className="fsz-13">
                ©️ 2025 Glorian Wood | Brickstone | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
