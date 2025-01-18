import React from "react";
import { useTranslation } from "react-i18next";

export const Services = (props) => {
  const { t } = useTranslation();

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("services.title")}</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={i} className="col-md-4">
                  <div className="service-desc">
                    <i className={d.icon}></i>
                    <h3>{t(`services.items.${i}.name`)}</h3>
                    <p>{t(`services.items.${i}.text`)}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
