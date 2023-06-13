import "../css/SearchResultsList.css";
import { SearchResult } from "./SearchResult";
import { Link } from "react-router-dom";
export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <Link className="link__item" to={`/details?id=${encodeURIComponent(result.idClub - 1)}`}>
            <SearchResult result={result.name} key={id} />
          </Link>
        );
      })}
    </div>
  );
};
