import { X } from "lucide-react";
interface IProps {
  search: string;
  setSearch: (search: string) => void;
}
const Search = ({ search, setSearch }: IProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="relative">
      <input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Search By Name"
        className={`w-full p-2 rounded-md border border-[#666666] 
            outline-none focus:bg-[#FFF2CD] focus:outline-none
            my-3 focus:ring-1 focus:ring-[#666666]`}
      />
      {search.trim() !== "" && (
        <X
          className={`w-4 h-4 cursor-pointer absolute right-3 top-1/2 -translate-y-1/2
                text-black hover:text-red-500 transition-all duration-300 hover:scale-110`}
          onClick={() => setSearch("")}
        />
      )}
    </div>
  );
};

export default Search;
