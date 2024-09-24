// FlagPreview.js
import React from "react";

const FlagPreview = ({ value }) => {
  return (
    <div style={{ width: "100px", height: "auto" }}>
      {" "}
      {/* Ajusta el tamaño según lo necesites */}
      {value ? (
        <div
          dangerouslySetInnerHTML={{ __html: value }}
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        <span>No flag available</span>
      )}
    </div>
  );
};

export default FlagPreview;
