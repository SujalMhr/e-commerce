import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../baseUrl";

const Item = (props) => {
  const url = new URL(props.image);

  const pathname = url.pathname;

  const imageUrl = `${BASE_URL}${pathname}`;

  console.log(imageUrl, "image url");

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={imageUrl} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-proce-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
