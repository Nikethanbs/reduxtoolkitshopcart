// import { useState,useEffect } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import './product.css'
// import { useDispatch} from "react-redux";
// import {add} from '../store/cartSlice'


// const Product = () => {

//     const [products,getProducts] = useState([])
//     const dispatch = useDispatch()

//     useEffect (() => {
//             fetch('https://fakestoreapi.com/products')
//             .then(data => data.json())
//             .then(result =>  getProducts(result))
//     },[])

//     const addToCart = (product) => {
//      dispatch(add(product));
//     }
    
//     const cards = products.map(product =>
//         (
//             <div className="col-md-3" style={{marginBottom:"10px"}}>
//              <Card key={product.id} className="h-100">
//                 <div className="text-center">
//                 <Card.Img variant="top" src={product.image} style={{width:"100px", height:"160px"}}/>

//                 </div>
//                     <Card.Body>
//                         <Card.Title >{product.title}</Card.Title>

//                         <Card.Text >
//                             INR:{product.price}
//                         </Card.Text>

                       
//                     </Card.Body>
//                     <Card.Footer style={{background:"white"}}>
//                             <Button variant="primary" onClick={ ()=> addToCart(product)}>Add to Cart</Button>
//                         </Card.Footer>
                    
//                 </Card>
//                 </div>
//     ))
   
//     return (
//         <>
//         <h1>Product Manger</h1>
       
   
//           <div className="row">
//           {cards}
//           </div>
      
//         </>
//     )
// }

// export default Product;
//above code is method1 for cartSlice//


//This below code is method2 for ProductSlice

import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert } from "react-bootstrap";
import './product.css'
import { useDispatch,useSelector} from "react-redux";
import {add} from '../store/cartSlice'
import { getProducts }  from "../store/productSlice";

const Product = () => {

   
    const dispatch = useDispatch()
    
    const {data:products,status} = useSelector(state => state.products);
    useEffect (() => {
        
            dispatch(getProducts());
            console.log(products)
       
            
    },[])

    if(status === "loading"){
        return <p>.......Loading</p>
    }

    if(status === "error"){
        return <Alert variant="danger" key="danger">Something went to wrong , Please try agin later</Alert>
    }

    const addToCart = (product) => {
     dispatch(add(product));
    }
    
   
    const cards = products.map(product =>
        (
            <div className="col-md-3" style={{marginBottom:"10px"}}>
             <Card key={product.id} className="h-100">
                <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{width:"100px", height:"160px"}}/>

                </div>
                    <Card.Body>
                        <Card.Title >{product.title}</Card.Title>

                        <Card.Text >
                            INR:{product.price}
                        </Card.Text>

                       
                    </Card.Body>
                    <Card.Footer style={{background:"white"}}>
                            <Button variant="primary" onClick={ ()=> addToCart(product)}>Add to Cart</Button>
                        </Card.Footer>
                    
                </Card>
                </div>
    ))
        
   
    return (
        <>
        <h1>Niki's Shop</h1>
       
   
          <div className="row">
          {cards}
          </div>
      
        </>
    )
}

export default Product;