import "./listitem.css";
import { Link } from "react-router-dom";
const ListItem = ({ movie }) => {
  return (
    <div>
      <div className="productList">
        <div className="productCard">
          <img src={movie.poster} className="productImage"></img>
          <div className="productCard__content">
            <h3 className="productName">{movie.name}</h3>
            <div className="displayStack__1">
              <div className="productSales">{movie.description}</div>
            </div>
            <Link to={`/details/${movie.id}`}>More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
