import React from "react";
import Button from "./Button";

function ErrorBanner({ error, handleClose }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "4rem",
        padding: "1rem",
        backgroundColor: "#000000",
      }}
    >
      <h1>Error</h1>
      <p>{error}</p>

      <Button title={"Hide"} handleClick={handleClose} />
    </div>
  );
}

export default ErrorBanner;
