import React from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {t("header.title")}
                  <span></span>
                </h1>
                <p
                  style={{
                    color: "black",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    // margin: "0 auto 25px",
                    padding: "0 10px",
                    wordBreak: "keep-all",
                    maxWidth: "100%",
                  }}
                >
                  {t("header.subtitle")}
                </p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
