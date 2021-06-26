import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavbarContext } from '../../Context'
import BlogCard from './BlogCard'
function Blog() {
    const [data, setData] = useState([])
    const {Auth,setAuth} = useContext(NavbarContext)
    useEffect(() => {
         if(Auth.data.auth===true){
          onLoad()
         }
    }, [])
    const onLoad = async ()=>{
      const blogdata = await  axios.get('https://novablog.webdevdemo.com/wp-json/wp/v2/posts?per_page=3&_embed')
      setData(blogdata.data)
    }
    return (
        <div className="row">
            
          {data && data.map(item=>{
             return  <BlogCard data = {item}></BlogCard>
          })}

        </div>
    )
}

export default Blog
