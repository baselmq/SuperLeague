import "../css/SearchResult.css";
import "bootstrap/dist/css/bootstrap.css";
export const SearchResult = (props) => {
  const styleImage = {
    width: "20px",
    height: "20px",
  };

  return (
    <div className="search-result d-flex gap-2">
      <img style={styleImage} src={props.image} alt={props.result} />
      {props.result}
    </div>
  );
};
