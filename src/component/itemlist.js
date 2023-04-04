import { Link } from "react-router-dom";

function Itemlist({ index, list }) {
  return (
    <li key={index}>
      <img src={list.url} />
      <Link to={list.itemurl}>
        <h4>{list.title}</h4>
      </Link>
      <span>{list.content}</span>
      <span>{list.price}원</span>
    </li>
  );
}

export default Itemlist;
