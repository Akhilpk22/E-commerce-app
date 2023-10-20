import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import useFetch from "../Hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishList } from "../redux/Slice/WishListSlice";

function Home() {
 const data = useFetch("https://dummyjson.com/products")
// the data will be display to the tope
 console.log(data);
 const dispatch =useDispatch()
 

  return (
    <Row className="ms-5" style={{ marginTop: "100px" }}>
      {
        // how to array element ti display in the react app in home page 
        data?.length>0?data?.map((product,index)=>(
          // conditinal rendering  all element to display in the section 
          <Col key={index} className="mb-5 " sm={12} md={6} lg={4} xl={3}>
          <Card  className="shadow rounded"  style={{ width: "18rem" }}>
          <Card.Img height={"200px"} variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <p>{product.description.slice(0,55)}...</p>
              <h2>${product.price}</h2>
            </Card.Text>
            <div className="d-flex justify-content-between ">
              <Button onClick={()=>dispatch(addToWishList(product))} className="btn btn-light">
              <i style={{fontSize:'20px'}} className="pt-3" class="fa-solid fa-heart fa-beat-fade"></i>
              </Button>
              <Button className="btn btn-light">
             
              <i style={{fontSize:'20px'}} className="pt-3" class="fa-solid fa-truck"></i>

              </Button>
            </div>
          </Card.Body>
        </Card>
        
      </Col>
        )):<p className="text-danger fw-bolder fs-4"> nothing to display</p>
        
      }
        
      
      
    </Row>
  );
}

export default Home;
