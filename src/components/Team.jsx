import React from "react";
import { useTranslation } from "react-i18next";

export const Team = () => {
  const { t } = useTranslation();

  console.log(t("team.members", { returnObjects: true }));
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{t("team.title")}</h2>
        </div>
        <div id="row">
          {t("team.members", { returnObjects: true }).map((member, index) => (
            <div key={index} className="col-md-3 col-sm-6 team">
              <div className="thumbnail">
                <img src={member.image} alt={member.name} className="team-img" />
                <div className="caption">
                  <h4>{member.name}</h4>
                  <p>{member.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
