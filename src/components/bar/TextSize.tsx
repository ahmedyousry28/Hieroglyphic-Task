import { Minus, Plus } from "lucide-react";
import { textSizes } from "../../data";
import { setOptions } from "../../store/optionsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

const TextSize = () => {
  const dispatch = useAppDispatch();
  const { textSize } = useAppSelector((state) => state.options);

  const increase = () => {
    if (textSize >= 96) return;
    dispatch(setOptions({ textSize: textSize + 1 }));
  };

  const decrease = () => {
    if (textSize <= 8) return;
    dispatch(setOptions({ textSize: textSize - 1 }));
  };

  return (
    <div className="flex items-center gap-2">
      <Minus className="cursor-pointer" onClick={decrease} />
      <select
        value={textSize}
        onChange={(e) =>
          dispatch(setOptions({ textSize: Number(e.target.value) }))
        }
        className=" rounded text-center p-1"
      >
        {!textSizes.includes(textSize) && (
          <option value={textSize} hidden>
            {textSize}
          </option>
        )}
        {textSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <Plus className="cursor-pointer" onClick={increase} />
    </div>
  );
};

export default TextSize;
