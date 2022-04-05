import React from "react";
import { useParams } from "react-router-dom";

const Service = () => {
  const { id } = useParams();
  // console.log(id);

  return (
    <>
      <h1 className="text-4xl">
        Service page and id is : <span className="text-primary">{id}</span>
      </h1>
    </>
  );
};

export default Service;
