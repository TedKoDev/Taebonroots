import React from "react";
import { useTranslation } from "react-i18next";

export const Gallery = (props) => {
  const { t } = useTranslation();
  console.log(props.data);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("gallery.title")}</h2>
          <p>{t("gallery.subtitle")}</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={i} className="col-sm-6 col-md-4 col-lg-4">
                    <div className="portfolio-item">
                      <div className="hover-bg">
                        <a href={d.largeImage} title={d.title} data-lightbox-gallery="gallery1">
                          <div className="hover-text">
                            <h4>{d.title}</h4>
                          </div>
                          <img src={d.smallImage} className="img-responsive" alt={d.title} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
