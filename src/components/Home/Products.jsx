import React from 'react'
import chair2 from '../Images/Chair 2.png'
import chair from '../Images/Chair 1.png'
import Tree from '../Images/Tree 2.png'
function Products() {
    return (
         <div className="row">
             <div className="gx-3 col-md-6 col-lg-3 col-sm-12">
              <div className="p-3">
              <h4>Why we best in out town</h4>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut sapiente nostrum eveniet dolores? Nesciunt debitis id sapiente quibusdam saepe, esse animi accusantium laboriosam nihil aliquam repudiandae, laborum, ducimus ipsam.</p>
            <h2 >$36</h2>
              </div>
            </div>
            <div className="gx-3 col-md-6 col-lg-3 col-sm-12">
           <div className="p-3">
           <img width="300px" src={chair} alt="" srcset="" />
            <h4  >Green chair with metal</h4>
            <h2 >$36</h2>
           </div>
            </div>

            <div className="gx-3 col-md-6 col-lg-3 col-sm-12">
           <div className="p-3">
           <img width="300px" src={chair} alt="" srcset="" />
            <h4  >Green chair with metal</h4>
            <h2 >$36</h2>
           </div>
            </div>

            <div className="gx-3 col-md-6 col-lg-3 col-sm-12">
           <div className="p-3">
           <img width="300px" src={chair} alt="" srcset="" />
            <h4  >Green chair with metal</h4>
            <h2 >$36</h2>
           </div>
            </div>


         </div>
    )
}

export default Products
