import React, { useState, useEffect } from "react";
import { client } from "./client";
import './App.css'


const Banner = ()=> {

  const [banner, setBanner] = useState(null);
  
    useEffect(() => {
        client.getEntries({
          content_type: "banner"
        }).then((response) => {
          console.log(response);
          setBanner(response.items[0]);
        })
        .catch(console.error)
      },[])

    return (
      <>
        {banner && 
          <div className = "banner" style={{backgroundImage:`url(${banner.fields.image.fields.file.url})`}}>
             <h1 className = "bannerMessage">{banner.fields.bannerMessage}</h1>
             <h4 className = "bannerDescription">{banner.fields.description}</h4>
        </div>
        }
      </>
    )
} 

export default Banner;
// 