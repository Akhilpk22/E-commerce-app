import React from 'react'
import { useSelector } from 'react-redux'
import { Row,Card,Button,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';



function Cart() {
  const cartArray = useSelector((satte)=>satte.cartReducer);


  return (
    <div style={{marginTop:'100px'}} >
       <Row>
          {
            cartArray.length>0?
            cartArray.map((product,index)=>(
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
                  {/* <Button  className="btn btn-light">
                  <i style={{fontSize:'20px'}} className="pt-3" class="fa-solid fa-heart fa-beat-fade"></i>
                  </Button> */}
                  <Button  className="btn btn-light">
                 
                  <i style={{fontSize:'20px'}} className="pt-3" class="fa-solid fa-truck"></i>
    
                  </Button>
                </div>
              </Card.Body>
            </Card>
            
          </Col>
            )):
            <div  style={{height:"60vh"}} className=' w-100 d-flex flex-column justify-content-center align-items-center '>
              
              <h3 style={{fontSize:'40px'}} className='te'> you cart is empty!!!</h3>
              <Link style={{textDecoration:'none'}} className='mt-3 shadow-lg,' to={'/'}>back to home</Link>
            </div>
          }
       </Row>
    </div>

  )
}

export default Cart