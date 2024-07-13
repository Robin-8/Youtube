import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-400 text-black px-2 py-2 m-2">
      {name}
    </button>
  );
};

export default Button;
