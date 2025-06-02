import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurentCard = ({ resName, cuisines, starRating, delTime, imageId, resId }) => {
  return (
    <div className="res-card">
      <Link to={`/restaurent/${resId}`} className="res-card-link">
        <img
          className="res-logo"
          alt="res-logo"
          src={`${CDN_URL}${imageId}`}
          style={{ width: "100%", borderRadius: "12px" }}
        />
        <h3>{resName}</h3>
        <p>{cuisines}</p>
        <p>⭐ {starRating} • {delTime} mins</p>
      </Link>
    </div>
  );
};

export const withOpenCloseInfo = (RestaurantCard) => {
  return (props) => {
    const { isOpen } = props;

    return (
      <div className="card-wrapper">
        {!isOpen && <label className="open-closed">Closed</label>}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
