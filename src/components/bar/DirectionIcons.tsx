import { TextAlignEnd, TextAlignStart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setOptions } from "../../store/optionsSlice";
const DirectionIcons = () => {
  const { direction } = useAppSelector((state) => state.options);
  const dispatch = useAppDispatch();
  return (
    <div className="flex text-2xl gap-2">
      <TextAlignStart
        onClick={() => dispatch(setOptions({ direction: "ltr" }))}
        className={`${
          direction === "ltr" ? "border border-[#666666]" : "border-none"
        }`}
      >
        <title>LTR (Left to Right)</title>
      </TextAlignStart>
      <TextAlignEnd
        onClick={() => {
          dispatch(setOptions({ direction: "rtl" }));
        }}
        className={`${
          direction === "rtl" ? "border border-[#666666]" : "border-none"
        }`}
      >
        <title>RTL (Right to Left)</title>
      </TextAlignEnd>
    </div>
  );
};

export default DirectionIcons;
