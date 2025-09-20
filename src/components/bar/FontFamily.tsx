import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fontFamilies } from "../../data";
import { setOptions } from "../../store/optionsSlice";

const FontFamily = () => {
  const dispatch = useAppDispatch();
  const { fontFamily } = useAppSelector((state) => state.options);
  return (
    <select
      value={fontFamily}
      onChange={(e) => dispatch(setOptions({ fontFamily: e.target.value }))}
      className=" rounded text-center p-1"
    >
      {fontFamilies.map(({ label, value }, id) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default FontFamily;
