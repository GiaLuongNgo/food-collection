import { useFoodsCollectionContext } from "@/contexts/FoodsCollectionContext";
import { SearchIcon } from "@/icons/IconSearch";
import './style.scss';
import { ChangeEventHandler } from "react";

const SearchInput: React.FC = () => {

  const { setText } = useFoodsCollectionContext();

  const handleSearch = (text: string) => {
    setText(text);
  };

  return (
    <div className="search-input">
      <SearchIcon alt="Search Icon" className="search-icon" />
      <input
        className="input-field"
        placeholder="Enter restaurant name..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
