import { TextAlignEnd, TextAlignStart } from "lucide-react";
import { useAppDispatch } from "../../store/store";
import { setOptions } from "../../store/optionsSlice";
const DirectionIcons = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex text-2xl gap-2">
      <TextAlignEnd
        onClick={() => {
          dispatch(setOptions({ direction: "rtl" }));
        }}
      >
        <title>RTL (Right to Left)</title>
      </TextAlignEnd>
      <TextAlignStart
        onClick={() => dispatch(setOptions({ direction: "ltr" }))}
      >
        <title>LTR (Left to Right)</title>
      </TextAlignStart>
    </div>
  );
};

export default DirectionIcons;
