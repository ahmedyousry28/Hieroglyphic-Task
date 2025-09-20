import { useState } from "react";
import Search from "./Search";
import SymbolsCard from "./SymbolsCard";

const AssistantMenu = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="row-span-3 md:row-span-1 md:col-span-4 bg-[#F3EFE6] rounded-md p-4 overflow-auto">
      <Search search={search} setSearch={setSearch} />
      <SymbolsCard search={search} />
    </div>
  );
};

export default AssistantMenu;
