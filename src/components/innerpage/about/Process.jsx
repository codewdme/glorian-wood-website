import React from "react";

function Process() {
  return (
    <section className="tc-process-style2">
      <div className="container">
        <h2 className="fsz-45 fw-500 mb-80 text-center">
          Our Approach
          <span className="sub-font fst-italic color-orange1 fw-400">
            process
          </span>
        </h2>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="accordion-side wow fadeInUp slow">
                <div className="accordion" id="accordionProcess">
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 / </span> <h3> Concept </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          We start with you. Your style, your space, your goals.
                          At Glorian Wood, we listen first, then guide you to
                          the perfect materials that match your vision and bring
                          your space to life.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 / </span> <h3> Design </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Design isn’t about following trends, it’s about
                          choosing what feels like you. At Glorian Wood, we make
                          that easier with a curated range of plywood,
                          laminates, veneers, modular fittings, and smart
                          solutions that blend seamlessly with your lifestyle
                          and space.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        <span className="num"> 3 / </span>{" "}
                        <h3> Development </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Once your choices are made, we handle the rest, with
                          on-time delivery, expert support, and guidance every
                          step of the way to ensure your space comes to life
                          exactly as imagined.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="accordion-item">
                    <div className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                      >
                        <span className="num"> 4 / </span> <h3> Handover </h3>
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          After surveying and obtaining the necessary
                          information, we will create a preliminary design
                          including technical drawings, 3D images of the
                          interior and provide a 3D VR experience to help
                          customers get a visual view of their project.
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="imgs">
                <div className="img" data-lag="0.3">
                  <img
                    src="/innerpages/assets/img/process/proc3.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Concept </span>
                </div>
                <div className="img" data-lag="0.2">
                  <img
                    src="/innerpages/assets/img/process/proc1.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Design </span>
                </div>
                {/* <div className="img" data-lag="0.4">
                  <img
                    src="/innerpages/assets/img/process/proc2.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Handover </span>
                </div> */}

                <div className="img" data-lag="0.5">
                  <img
                    src="/innerpages/assets/img/process/proc4.jpg"
                    alt=""
                    className="img-cover"
                  />
                  <span className="txt sub-font"> Development </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/innerpages/assets/img/prc_bg.png"
        alt=""
        className="bg"
        data-speed="1.2"
      />
    </section>
  );
}

export default Process;
