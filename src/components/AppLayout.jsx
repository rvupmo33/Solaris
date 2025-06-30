import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import WorksheetModal from "./WorksheetModal";

const AppLayout = () => {
  const location = useLocation();
  const hideButtonOn = ["/", "/realms"];
  const shouldShowButton = !hideButtonOn.includes(location.pathname);

  const [showModal, setShowModal] = useState(false);
  const [worksheet, setWorksheet] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4a: "",
    q4b: "",
    q4c: "",
    q5: "",
    q6: "",
  });

  return (
    <>
      {shouldShowButton && (
        <>
          <button className="worksheet-btn" onClick={() => setShowModal(true)}>
            📝 Worksheet
          </button>
          {showModal && (
            <WorksheetModal
              worksheet={worksheet}
              setWorksheet={setWorksheet}
              onClose={() => setShowModal(false)}
            />
          )}
        </>
      )}
      <Outlet />
    </>
  );
};

export default AppLayout;
