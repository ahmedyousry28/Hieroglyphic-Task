import { useState, useEffect } from "react";
import { hieroglyphic_symbols } from "../../data/index";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setData as setDataAction } from "../../store/dataSlice";
const SymbolsCard = ({ search }: { search: string }) => {
  const { content } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  const [data, setData] =
    useState<{ name: string; symbol: string }[]>(hieroglyphic_symbols);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        const filteredData = hieroglyphic_symbols.filter((item) =>
          item.name.toLowerCase().startsWith(search.trim().toLowerCase())
        );
        setData(filteredData);
      } else {
        setData(hieroglyphic_symbols);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [search]);
  const renderSymbols = data.map(({ name, symbol }, index) => {
    return (
      <span
        key={name + index}
        className="text-3xl font-bold cursor-grab hover:scale-110"
        onClick={() => dispatch(setDataAction(content + symbol))}
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", symbol);
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const droppedSymbol = e.dataTransfer.getData("text/plain");
          dispatch(setDataAction(content + droppedSymbol));
        }}
      >
        {symbol}
      </span>
    );
  });
  return (
    <div className="grid grid-cols-10 bg-[#FFF] p-2 rounded-md">
      {renderSymbols.length > 0 ? (
        renderSymbols
      ) : (
        <span className="text-center text-2xl font-bold col-span-full">
          No symbols found
        </span>
      )}
    </div>
  );
};

export default SymbolsCard;
