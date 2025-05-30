import React from "react";

function About() {
  return (
    <section className="tc-about-style7">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-3">
            <div className="rotate-box" data-speed="1" data-lag="0.4">
              <a
                href="#"
                className="rotate-circle fsz-30 rotate-text d-inline-block text-uppercase"
              >
                <svg className="textcircle" viewBox="0 0 500 500">
                  <defs>
                    <path
                      id="textcircle"
                      d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                    ></path>
                  </defs>
                  <text>
                    <textPath xlinkHref="#textcircle" textLength="900">
                      Glorian Wood - Glorian Wood -
                    </textPath>
                  </text>
                </svg>
              </a>
              <img
                src="/innerpages/assets/img/leafs.png"
                alt=""
                className="icon"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info wow fadeInUp slow" data-wow-delay="0.2s">
              <div className="text fsz-25 fw-500 mb-20">
                At Glorian Wood, we redefine interiors with premium-quality
                plywood, laminates, veneers, modular kitchen fittings, and
                architectural hardware. With a commitment to craftsmanship,
                innovation, and durability, we bring your vision to life with
                materials that blend aesthetics with functionality.
              </div>
              <div className="text fsz-25 fw-500 mb-20">
                From luxurious home interiors to high-end commercial spaces, our
                products cater to homeowners, interior designers, and architects
                who seek excellence. Whether you’re looking for elegant
                decorative panels, smart digital locks, or turnkey interior
                solutions through GW Infratech, we have everything to create
                timeless and sophisticated spaces.
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="numbers mt-5 mt-lg-0">
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.4s"
              >
                <h2 className="numb"> 95% </h2>
                <small> Clients Satisfied and repeating </small>
              </div>
              <div
                className="number-card wow zoomIn slow"
                data-wow-delay="0.6s"
              >
                <h2 className="numb"> 125% </h2>
                <small> projects done </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
