import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import Itemlist from "./component/itemlist";
import Detail from "./component/detail";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동하는 함수

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">Shopingmall</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/cart">
              <Nav.Link href="#cart">Cart</Nav.Link>
            </Link>
            <Nav.Link
              onClick={() => {
                navigate("/mypage");
              }}
            >
              Mypage
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bener"></div>
              <div>
                <ul className="itemlist">
                  {shoes.map((list, index) => (
                    <Itemlist shoes={shoes} list={list} index={index} />
                  ))}
                </ul>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<div>cart page</div>} />
        <Route path="/mypage" element={<div>my page</div>} />
        <Route path="*" element={<div>없는 페이지 데스</div>} />
      </Routes>
    </div>
  );
}

export default App;
