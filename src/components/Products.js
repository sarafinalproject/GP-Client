import React, { useState, useEffect } from 'react';
import UtilsService from './UtilsService';
export default function Products(props) {
  const [products, setProducts] = useState([]);
  const utilsService = new UtilsService();
  useEffect(async () => {

    let resp = await utilsService.getItems("http://localhost:8000/api/products")
    .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <ul>
        {
          products.map((item, index) => {
            return <li key={index}>{item.name}{" "}{item.category}{" "}{item.city}</li>
          })
        }
      </ul>
    </div>
    /*<div>  
           <button onClick={()=>getProducts()}> get Data</button>
           {          
    
                   <ul>
              {
                products.map((item, index) =>
                {
                  return <li key={index}>{item.name}{" "}{item.category}</li>
                })
              }
            </ul>
    }
    
           
    
    </div>*/
  )


}