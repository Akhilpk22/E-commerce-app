import React from 'react'
import { Row,Card,Button,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom';
import { removeToWishList } from '../redux/Slice/WishListSlice';

function WishLists() {
   

  const WishlistArray = useSelector((state)=>state.wishListReducer)

  const dispatch =useDispatch()
  return (
    <div  style={{marginTop:'100px'}}>
      <Row className='mt-5'>
        {
          WishlistArray.length>0?
          WishlistArray.map((product,index)=>(
            <Col key={index} className="mb-5 ms-5 " sm={12} md={6} lg={4} xl={3}>
            <Card  className="shadow rounded"  style={{ width: "18rem" }}>
            <Card.Img height={"200px"} variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <p>{product.description.slice(0,55)}...</p>
                <h2>${product.price}</h2>
              </Card.Text>
              <div className="d-flex justify-content-between ">
                <Button onClick={()=>dispatch(removeToWishList(product.id))} className="btn btn-light">
                <i style={{fontSize:'20px'}} className="pt-3" class="fa-solid fa-trash fa-beat-fade"></i>
                </Button>
                <Button className="btn btn-light">
               
                <i style={{fontSize:'20px'}} className="pt-3" class="fa-solid fa-truck"></i>
  
                </Button>
              </div>
            </Card.Body>
          </Card>
          
        </Col>
          )):
          <div  style={{height:"60vh"}} className=' w-100 d-flex flex-column justify-content-center align-items-center '>
            <h3 className='te'> you WishList is empty!!!</h3>
            <Link style={{textDecoration:'none'}} className='mt-3' to={'/'}>back to home</Link>
          </div>
        }
      </Row>
    
    </div>
  )
}

export default WishLists