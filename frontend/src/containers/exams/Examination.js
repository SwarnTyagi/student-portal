import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
export default function Examination() {
  const onClick = () => {
    console.log("i am clicked");
  };

  return (
    <div>
      <Breadcrumbs separator=">">
        <Link onClick={onClick} to="Examination">
          Examination
        </Link>
        <Link onClick={onClick} to="Examination/Results">
          Results
        </Link>
      </Breadcrumbs>
    </div>
  );
}
