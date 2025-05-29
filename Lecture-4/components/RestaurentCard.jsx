import { CDN_URL } from "../utils/constants";
const RestaurentCard = ({ resName, cuisines, starRating, delTime, imageId }) => {
  return (
    <div className="res-card" >
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${imageId}`}
        style={{ width: "100%", borderRadius: "12px" }}
      />
      <h3>{resName}</h3>
      <p>{cuisines}</p>
      <p>⭐ {starRating} • {delTime} mins</p>
    </div>
  );
};
export default RestaurentCard;
