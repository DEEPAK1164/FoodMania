import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../Slices/cartSlice';


const ItemList = ({ items }) => {
  const dispatch=useDispatch();
const handleAddItem=(item)=>{
  //dispatch an action
dispatch(addItem(item));


}


  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item-card" key={item.card.info.id}>
          <div className="item-details">
            <span className="item-name">{item.card.info.name}</span>
            <span className="item-price">
              ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
            </span>
            <p className="item-description">{item.card.info.description}</p>
          </div>

          <div className="item-image-section">
            {item.card.info.imageId && (
              <img
                className="item-image"
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
            )}
            <button className="add-button" onClick={()=>{
              handleAddItem(item);
            }}>Add +</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
