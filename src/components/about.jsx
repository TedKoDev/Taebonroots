import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" style={{ width: "100%", overflow: "hidden" }}>
      <div className="container-fluid" style={{ padding: 0 }}>
        <div className="row" style={{ margin: 0 }}>
          <div className="col-xs-12 col-md-6" style={{ marginBottom: "20px", padding: 0 }}>
            <img src="img/about.jpg" className="img-responsive" style={{ width: "100%", height: "auto" }} alt="" />
          </div>
          <div className="col-xs-12 col-md-6" style={{ padding: "0 15px" }}>
            <div className="about-text">
              <h2>{t("about.title")}</h2>
              <p>{t("about.paragraph")}</p>
              <h3>{t("about.why.title")}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul style={{ paddingLeft: "20px" }}>
                    {t("about.why.list1", { returnObjects: true }).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul style={{ paddingLeft: "20px" }}>
                    {t("about.why.list2", { returnObjects: true }).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
