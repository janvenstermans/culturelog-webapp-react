import React from "react";
import { useParams } from "react-router-dom";

const Experience = () => {
  let params = useParams();
  return <h1>Details Experience {params.experienceId}</h1>;
};

export default Experience;
