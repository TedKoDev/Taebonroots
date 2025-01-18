import React from "react";
import { useTranslation } from "react-i18next";

export const Features = (props) => {
  const { t } = useTranslation();

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{t("features.title")}</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={i} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{t(`features.items.${i}.title`)}</h3>
                  <p>{t(`features.items.${i}.text`)}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
