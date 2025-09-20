import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setData } from "../store/dataSlice";
import MenuBar from "./bar/MenuBar";
import { useFocusTextarea } from "../hooks/useFocusTextArea";

const Content = () => {
  const { textareaRef, focusAtEnd } = useFocusTextarea();
  const allData = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    focusAtEnd();
  }, [focusAtEnd, allData.data.content]);
  return (
    <div className="row-span-9 md:row-span-1 md:col-span-8 border border-[#666666] rounded-md">
      <MenuBar />
      <textarea
        ref={textareaRef}
        value={allData.data.content}
        dir={allData.options.direction}
        placeholder={
          allData.options.direction === "rtl"
            ? "اكتب هنا ..."
            : "write here ..."
        }
        onChange={(e) => dispatch(setData(e.target.value))}
        className={`w-full h-full resize-none outline-none p-4`}
        style={{
          fontSize: `${allData.options.textSize}px`,
          fontFamily: `${allData.options.fontFamily}`,
          color: `${allData.options.color}`,
        }}
      />
    </div>
  );
};

export default Content;
