import { Button } from "react-bootstrap";

function Detail({ shoes }) {
  return (
    <>
      <div className="item-detail">
        <container>
          <div className="item-picture">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" />
          </div>
          <div className="item-info">
            <h2>{shoes[0].title}</h2>
            <h2>{shoes[0].price}원</h2>
            <p>{shoes[0].content}</p>
            <hr />
            <div className="options">
              <select name="order" form="myForm">
                <option value="size">Choose your size</option>
                <option value="270">270</option>
                <option value="275">275</option>
                <option value="280">280</option>
                <option value="285">285</option>
              </select>
              <hr />
              <div className="buttons">
                <Button variant="outline-primary">장바구니 담기</Button>
                <Button variant="outline-primary">바로 구매하기</Button>
              </div>
            </div>
          </div>
        </container>
        <div>
          <img src="https://cdn.imweb.me/thumbnail/20220126/8e2608ec5069d.jpg" />
        </div>
      </div>
    </>
  );
}

export default Detail;
