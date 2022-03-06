import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ExperienceSummary = ({ experience }) => {
  const { id, type, medium, name, date } = experience;
  const navigate = useNavigate();
  const openDetails = () => navigate(`/experiences/${id}`);
  return (
    <div className="list-group-item">
      <div class="row" onClick={openDetails}>
        <div className="col">{date}</div>
        <div class="col">
          <div className="">{type}</div>
          <div className="">{medium}</div>
        </div>
        <div className="col-8">
          <p className="text-left" style={{ textAlign: "left" }}>
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSummary;
