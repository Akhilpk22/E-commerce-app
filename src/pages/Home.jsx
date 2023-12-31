import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

function Home() {
  const data = useFetch("https://dummyjson.com/products");
  // console.log(data); // all products in data
  const dispatch = useDispatch()
  return (
    <>
      <Row className="ms-5" style={{ marginTop: "150px" }}>
        {
          //conditional rendering
          data?.length > 0 ? (
            data?.map((product, index) => (
              <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
                <Card className="shadow rounded" style={{ width: "18rem" , height:"29rem"}}>
                  <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
                  <Card.Body>
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Text>
                      <p>{product?.description.slice(0,55)}...</p>
                      <h5>$ {product?.price}</h5>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button className="btn btn-light">
                        <i className="fa-solid fa-heart text-danger me-2 fa-2x" onClick={()=>dispatch(addToWishlist(product))}></i>
                      </Button>
                      <Button className="btn btn-light">
                        <i className="fa-solid fa-cart-shopping text-success me-2 fa-2x" onClick={()=>dispatch(addToCart(product))}></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-danger fw-bold fs-4">Nothing to Display</p>
          )
        }
      </Row>
    </>
  );
}

export default Home;
