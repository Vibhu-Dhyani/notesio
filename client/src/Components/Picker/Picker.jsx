import React, { useState } from "react";
import "./Picker.scss";
const Picker = ({ newTag, setNewTag, shareOrTag }) => {
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      // Update the array with the new value
      if (
        e.target.value === "" ||
        newTag.find((itm) => e.target.value === itm) !== undefined
      ) {
        return;
      }
      setNewTag([...newTag, e.target.value]);
      e.target.value = "";
    } else if (e.key === "Backspace") {
      setNewTag(newTag.filter((_, i) => i !== newTag.length - 1));
    }
  };

  return (
    <div className="picker">
      <ul className="picker_list">
        {newTag.map((item, index) => (
          <li key={index} className="picker_list_item">
            {item}{" "}
            <span
              onClick={() => {
                setNewTag(newTag.filter((_, i) => i !== index));
              }}
            >
              {" "}
              x
            </span>
          </li>
        ))}

        <input
          className="picker_list_input"
          type="text"
          onKeyDown={handleEnter}
          placeholder={shareOrTag}
        />
      </ul>
    </div>
  );
};

export default Picker;
