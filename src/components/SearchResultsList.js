import "../css/SearchResultsList.css";
import { SearchResult } from "./SearchResult";
import { Link } from "react-router-dom";
export const SearchResultsList = ({ results, setResult }) => {
  const setSearch = (value) => {
    setResult("");
    // setValue(value);
  };
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <Link
            className="link__item"
            to={`/details?id=${encodeURIComponent(result.idClub - 1)}`}
            key={id}
            onClick={() => setSearch(id)}
          >
            <SearchResult result={result.name} image={result.image} />
          </Link>
        );
      })}
    </div>
  );
};
