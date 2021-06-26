import React from 'react'

export default function BlogCard({data}) {
     console.log(data)
    return (
        <div className="gx-3 col-md-6 col-lg-3">
           <div className="p-3">
                <h1>{data.id}</h1>
                <h1>{data.slug}</h1>
                <h1>{data?.template ||'...'}</h1>
                
           </div>
       </div>
    )
}
