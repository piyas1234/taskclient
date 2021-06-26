import React from 'react'
import img1 from '../Images/img1.png'
import Sofa from '../Images/Sofa2.png'
import Lamp from '../Images/Lamp3.png'
import Products from './Products'
 
function Home() {
    return (
        <div style = {{background:'#94A57C'}}>
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-md-5 offset-md-1">
                         <h1 className="text-white">Furniture That EveryOne Loves</h1>
                         <p className="text-white"> we have 5000 + reviews and our customers are trust in out furnitures</p>
                         <button type="submit">Buy Now</button>
                         <button type="submit">Explore</button>
                     </div>
                     <div className="col-md-5 offset-md-1">
                        <img width="60%" src={img1} alt="" srcset="" />
                     </div>
                 </div>
             </div>
             <div className="container-fluid">
                  
                 <div className="col-md-8 offset-md-3 d-flex">

                        <img  src={Sofa} width="80%" alt="" srcset="" />
                        <img src={Lamp} width="20%"  alt="" srcset="" />
                 </div>
             </div>

             <Products/>
        </div>
    )
}

export default Home
