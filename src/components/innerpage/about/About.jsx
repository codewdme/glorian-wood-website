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
                At Glorian Wood, we believe great spaces begin with great
                materials, the kind that combine beauty, strength, and purpose.
                For over 29 years, we’ve been helping people transform houses
                into homes and blueprints into bold, timeless interiors. From
                premium plywood, sleek laminates, and elegant veneers to modular
                kitchen fittings and architectural hardware, every product is
                thoughtfully selected to elevate your space, inside and out.
              </div>
              <div className="text fsz-25 fw-500 mb-20">
                Whether you're a homeowner chasing that perfect finish, a
                designer crafting your next masterpiece, or an architect
                building something iconic, We’re here to support your vision
                with materials that deliver on design, durability, and detail.
                And when it comes to complete interior execution, our in-house
                team at GW Infratech brings it all together - smart, seamless,
                and stunning. At Glorian, it's not just about surfaces. It's
                about helping you build spaces that feel like you. Bold,
                refined, and built to last.
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
