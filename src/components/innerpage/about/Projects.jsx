import { useState } from "react";

function Projects() {
  const [activeTab, setActiveTab] = useState("pills-proj1");
  const [subcategories, setSubcategories] = useState([]);
  const getSubcategories = (tabId) => {
    // Implement your logic to get subcategories based on tabId
    // This is a placeholder function
    return [];
  };
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setSubcategories(getSubcategories(tabId));
  };
  return (
    <section id="services" className="tc-projects-style2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2 className="fsz-45 fw-500">
              Our{" "}
              <span className="sub-font fst-italic color-orange1 fw-400">
                Products & Services
              </span>
            </h2>
          </div>
          {/* <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
            <a
              href="#"
              className="butn borderd border rounded-pill hover-bg-black"
            >
              <span>
                See All Projects
                <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
              </span>
            </a>
          </div> */}
        </div>
        <div className="tabs-links mt-40">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-proj1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj1"
                type="button"
              >
                Plywood and Veneers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj2"
                type="button"
              >
                Decorative Panels and laminates
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj3-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj3"
                type="button"
              >
                Modular Solutions
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj4-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj4"
                type="button"
              >
                Wallpapers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj5-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj5"
                type="button"
              >
                Smart Digital Locks
              </button>
            </li>
            {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-proj4-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-proj2"
                type="button"
              >
                TurnKey Interior Solutions
              </button>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="tab-content" id="pills-tabContent">
        {/* plywood and veneers start */}
        <div
          className="tab-pane fade show active"
          id="pills-proj1"
          role="tabpanel"
          aria-labelledby="pills-proj1-tab"
        >
          <div className="projects-slider-content mt-100">
            <div className="projects-slider">
              <div className="swiper-wrapper">
                {/* Plywood */}
                {/* 1st */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/plywood/10.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Plywood </a>
                        {/* <a href="#"> Veneers </a> */}
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Marine Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 2nd */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/plywood/11.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Plywood </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Moisture-Resistant (MR) Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 3rd */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/plywood/12.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Plywood </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Commercial Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 4th */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/plywood/13.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Plywood </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Fire-Retardant (FR) Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* veneers */}
                {/* 1st */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/veneer/16.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Veneer </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Fire-Retardant (FR) Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 2nd */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/veneer/17.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Veneer </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Fire-Retardant (FR) Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 3rd */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/veneer/18.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Veneer </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Fire-Retardant (FR) Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 4th */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/veneer/19.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Veneer </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Fire-Retardant (FR) Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 5th */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/veneer/20.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Veneer </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Fire-Retardant (FR) Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 6th */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/veneer/21.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Veneer </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Fire-Retardant (FR) Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 7th */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/veneer/22.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Veneer </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Fire-Retardant (FR) Plywood </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="controls">
                <div className="container">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* plywood and veneers end */}
        {/* decorative-panels-and-laminates start */}
        <div
          className="tab-pane fade"
          id="pills-proj2"
          role="tabpanel"
          aria-labelledby="pills-proj2-tab"
        >
          <div className="projects-slider-content mt-100">
            <div className="projects-slider">
              <div className="swiper-wrapper">
                {/* decorative panels */}
                {/* 1st decorative-panel */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/decorative-panels/11.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Decorative Panel </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 2nd decorative-panel */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/decorative-panels/12.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Decorative Panel </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 3rd decorative-panel */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/decorative-panels/13.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Decorative Panel </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 4th decorative-panel */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/decorative-panels/14.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Decorative Panel </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 5th decorative-panel */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/decorative-panels/15.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Decorative Panel </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* laminates */}
                {/* 1st laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/01.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 2nd laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/02.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 3rd laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/03.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 4th laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/04.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 5th laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/05.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 6th laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/06.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 7th laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/07.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 8th laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/08.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 9th laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/09.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 10th laminate */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/laminates/10.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#"> Laminate </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="controls">
                <div className="container">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* decorative-panels-and-laminates end */}
        {/* Modular Solutions start */}
        <div
          className="tab-pane fade"
          id="pills-proj3"
          role="tabpanel"
          aria-labelledby="pills-proj3-tab"
        >
          <div className="projects-slider-content mt-100">
            <div className="projects-slider">
              <div className="swiper-wrapper">
                {/* Modular Solutions*/}
                {/* 1st modular solution */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/modular-solutions/tendums.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Modular Solutions </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 2nd modular solution */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/modular-solutions/kitchen-pantry.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Modular Solutions </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 3rd modular solution */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/modular-solutions/wardrobe-multi-rotation-shoe-rack.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Modular Solutions </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 4th modular solution */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/modular-solutions/wardrobe-pull-down-cloth-hanger.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Modular Solutions </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 5th modular solution */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/modular-solutions/kitchen-tall-units.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Modular Solutions </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="controls">
                <div className="container">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modular Solutions end */}
        {/* Wallpapers start */}
        <div
          className="tab-pane fade"
          id="pills-proj4"
          role="tabpanel"
          aria-labelledby="pills-proj4-tab"
        >
          <div className="projects-slider-content mt-100">
            <div className="projects-slider">
              <div className="swiper-wrapper">
                {/* Wallpapers*/}
                {/* 1st wallpaper */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/wallpapers/01.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Wallpaper </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 2nd wallpaper */}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/wallpapers/02.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Wallpaper </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="controls">
                <div className="container">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modular Solutions end */}
        {/* Locks Start*/}
        <div
          className="tab-pane fade"
          id="pills-proj5"
          role="tabpanel"
          aria-labelledby="pills-proj5-tab"
        >
          <div className="projects-slider-content mt-100">
            <div className="projects-slider">
              <div className="swiper-wrapper">
                {/* Locks*/}
                {/* 1st Lock*/}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/locks/01.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Lock </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 2nd Lock*/}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/locks/02.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Lock </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 3rd Lock*/}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/locks/03.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Lock </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 4th Lock*/}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/locks/04.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Lock </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
                {/* 5th Lock*/}
                <div className="swiper-slide">
                  <div className="project-card">
                    <a href="#" className="img">
                      <img
                        src="/innerpages/assets/img/products/locks/05.jpg"
                        alt=""
                        className="img-cover"
                      />
                      <div className="year">
                        <span className="txt"> GW </span>
                        <img
                          src="/innerpages/assets/img/project_shape.png"
                          alt=""
                          className="bg"
                        />
                      </div>
                      {/* <div className="arrow">
                        <i className="fal fa-long-arrow-right ico-45"></i>
                      </div> */}
                    </a>
                    <div className="info">
                      <div className="tags">
                        <a href="#">Lock </a>
                      </div>
                      {/* <h3 className="title">
                        <a href="#"> Louvers & Fluted Panels </a>
                      </h3> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="controls">
                <div className="container">
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
