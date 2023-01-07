import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCart } from "../../store/cart";
import { likeProduce } from '../../store/produce';

function ProduceDetails({ produce }) {
  const [liked, setLiked] = useState(produce.liked);
  const dispatch = useDispatch();
  const inCart = useSelector(state => state.cart[produce.id]);

  useEffect(() => {
    setLiked(produce.liked);
  }, [produce.liked]);

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (liked ? " selected" : "")}
          onClick={() => {dispatch(likeProduce(produce.id))}}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (inCart ? " selected" : "")}
          onClick={() => {dispatch(addCart(produce.id))}}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
