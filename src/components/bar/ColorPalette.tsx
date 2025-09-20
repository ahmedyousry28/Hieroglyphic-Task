import { useRef, useState, useEffect } from "react";
import { colors } from "../../data";
import { setOptions } from "../../store/optionsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

const ColorPalette = () => {
  const dispatch = useAppDispatch();
  const { color } = useAppSelector((state) => state.options);
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toggle &&
        ref.current &&
        iconRef.current &&
        !ref.current.contains(event.target as Node) &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);
  return (
    <div
      ref={iconRef}
      tabIndex={0}
      className="w-5 h-5 rounded-full relative cursor-pointer focus:outline-2 focus:outline-black"
      style={{ backgroundColor: `${color}` }}
      onClick={() => setToggle(!toggle)}
    >
      <div
        className={`w-52 h-52 bg-[#fff] absolute top-6 left-1/2 -translate-x-1/2 rounded-md flex flex-wrap justify-center items-start p-2
      ${toggle ? "block" : "hidden"}`}
        ref={ref}
      >
        {colors.map((item, id) => (
          <span
            key={id}
            className={`w-4 h-4 rounded-full cursor-pointer inline-block m-0.5 hover:scale-110 `}
            style={{
              backgroundColor: item,
              outline: color === item ? "2px solid black" : "none",
              border: color === item ? "none" : "1px solid #ededed",
            }}
            onClick={() => {
              dispatch(setOptions({ color: item }));
              setToggle(false);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
