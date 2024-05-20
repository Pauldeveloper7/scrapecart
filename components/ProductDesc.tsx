'use client'
import { useState } from "react";
interface props {
    description:any;
}
const ProductDesc = ({description}:props) => {
    const [read, setRead] = useState(false);
  return (
    <section>
           {
            !read?
            <>
            <p>{description.substring(0,2000)}</p>
            <button  className="underline font-bold" 
            onClick={()=>setRead(true)}>  ...Read more</button>
            </>
            :
            <>
            {description}
            <button className="underline font-bold" 
            onClick={()=>setRead(false)}> ...Read less</button>
            </>  }
    </section>
  )}
export default ProductDesc ;
