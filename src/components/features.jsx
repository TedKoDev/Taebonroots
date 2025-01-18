import React from "react";
import { useTranslation } from "react-i18next";

export const Features = (props) => {
  const { t } = useTranslation();

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("features.title")}</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={i}
                  className="col-xs-12 col-sm-6 col-md-3"
                  style={{
                    marginBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      padding: "0 10px",
                      maxWidth: "300px",
                      margin: "0 auto",
                    }}
                  >
                    <i className={d.icon}></i>
                    <h3
                      style={{
                        fontSize: "18px",
                        marginBottom: "15px",
                        wordBreak: "keep-all",
                      }}
                    >
                      {t(`features.items.${i}.title`)}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                        wordBreak: "keep-all",
                        margin: "0",
                      }}
                    >
                      {t(`features.items.${i}.text`)}
                    </p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
