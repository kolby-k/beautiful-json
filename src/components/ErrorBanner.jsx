import React from "react";
import Button from "./Button";

function ErrorBanner({ error, handleClose }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "25rem",
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#555",
        border: "1px solid #222",
        borderRadius: "10px",
        padding: "1rem",
      }}
    >
      <h1>Error</h1>
      <p style={{ fontSize: "16px", padding: "1rem" }}>{error}</p>
      <Button title={"Close"} handleClick={handleClose} />
    </div>
  );
}

export default ErrorBanner;
