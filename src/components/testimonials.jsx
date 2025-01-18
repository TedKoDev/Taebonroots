import React from "react";
import { useTranslation } from "react-i18next";

export const Testimonials = (props) => {
  const { t } = useTranslation();

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>{t("testimonials.title")}</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={i} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.img} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta">{d.name}</div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
