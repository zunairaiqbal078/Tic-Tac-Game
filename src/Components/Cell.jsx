import React from "react";

function Cells({ value, onClick }) {
  return (
    <button
      className="text-3xl text-center text-white border-solid rounded-md cursor-pointer"
      onClick={onClick}
      style={{ width: "90px", height: "70px", border: "1px solid Black" }}
    >
      {value}
    </button>
  );
}

export default Cells;
