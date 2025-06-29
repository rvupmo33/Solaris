import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1 className="realm-title">Oops, you seem to be lost!</h1>
      <br />
      <h3>Here are some helpful links:</h3>
      <p className="nav-links" onClick={() => navigate("/")}>
        Home
      </p>
      <p className="nav-links" onClick={() => navigate("/realms")}>
        Realms
      </p>
    </div>
  );
};

export default NotFound;
