import React from "react";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            {" "}
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            TaeBon
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                {t("nav.features")}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                {t("nav.gallery")}
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                {t("nav.testimonials")}
              </a>
            </li> */}
            <li>
              <a href="#team" className="page-scroll">
                {t("nav.team")}
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                {t("nav.contact")}
              </a>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "5px", padding: "10px" }}>
              <button
                onClick={() => changeLanguage("ko")}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#f6f6f6",
                  cursor: "pointer",
                }}
              >
                한국어
              </button>
              <button
                onClick={() => changeLanguage("en")}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#f6f6f6",
                  cursor: "pointer",
                }}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("ru")}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#f6f6f6",
                  cursor: "pointer",
                }}
              >
                Русский
              </button>
              <button
                onClick={() => changeLanguage("ja")}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#f6f6f6",
                  cursor: "pointer",
                }}
              >
                日本語
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
