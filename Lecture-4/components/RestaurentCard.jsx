const RestaurentCard = ({ resName, cuisines, starRating, delTime, imageId }) => {
  return (
    <div className="res-card" >
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
        style={{ width: "100%", borderRadius: "12px" }}
      />
      <h3>{resName}</h3>
      <p>{cuisines}</p>
      <p>⭐ {starRating} • {delTime} mins</p>
    </div>
  );
};


export default RestaurentCard;
