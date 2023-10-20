import React from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Hader() {
  const Wishlist = useSelector((state) => state.wishListReducer);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary p-3 position-fixed top-0 w-100 mb-5 z-1 "
    >
      <Container>
        <Navbar.Brand>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "28px",
            }}
          >
            <i class="fa-solid fa-truck-fast"></i> E Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="btn border rounded">
              <Link
                to={"/WishLists"}
                className="d-flex align-items-center"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                <i class="fa-solid fa-heart fa-fade me-2"></i>Wishlist{" "}
                <Badge className="ms-2 rounded  me-2">{Wishlist.length}</Badge>{" "}
              </Link>
            </Nav.Link>
            <Nav.Link className="btn border rounded ms-4">
              <Link
                to={"/Cart"}
                className="d-flex align-items-center"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                <i class="fa-solid text-warning fa-cart-shopping me-2"></i>Cart{" "}
                <Badge className="ms-2 rounded  me-2">10</Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Hader;
