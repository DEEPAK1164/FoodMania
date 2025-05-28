


const RestaurentCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oqk0mierg0rlhuxoa3ok"
      />
      <h3>{props.resName}</h3>
      <p>{props.cuisines}</p>
      <p>⭐ {props.starRating} • {props.delTime} mins</p>
    </div>
  );
};

export default RestaurentCard;
