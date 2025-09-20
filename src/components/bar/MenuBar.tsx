import ColorPalette from "./ColorPalette";
import DirectionIcons from "./DirectionIcons";
import FontFamily from "./FontFamily";
import TextSize from "./TextSize";

const MenuBar = () => {
  return (
    <div className="border-b border-[#666666] flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <TextSize />
        <ColorPalette />
      </div>
      <div className="flex items-center gap-2">
        <FontFamily />
        <DirectionIcons />
      </div>
    </div>
  );
};

export default MenuBar;
