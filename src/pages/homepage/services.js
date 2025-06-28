import React from "react";
import Loader from "../../components/common/Loader";

import About from "../../components/innerpage/about/About";
import Process from "../../components/innerpage/about/Process";
import Projects from "../../components/innerpage/about/Projects";
import Awards from "../../components/innerpage/about/Awards";

import { Helmet } from "react-helmet";

function ServicePage() {
  return (
    <>
      {/* <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/innerpages/assets/css/innerpages.css"
        />
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/innerpages/assets/js/innerpages.js"></script>
      </Helmet> */}
      <div className="inner-pages-style1 about-pg-style1">
        {/* <Loader /> */}

        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <main>
            {/* <About /> */}
            {/* <Process /> */}

            <Projects />

            <Awards />
          </main>
        </div>
      </div>
    </>
  );
}

export default ServicePage;
