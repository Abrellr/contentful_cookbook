
import React, { useEffect, useState } from "react";
import client from "./client"
import "./App.css"

function Header(){

    const [ header, setHeader ] = useState(null)

    useEffect(() => {
        client.getEntries({
            content_type: "header"
        })
        .then((response) => { 
          setHeader(response.items[0])})
        .catch(console.error)
    },[])
    console.log(header);

    return (
        <div className="header">
            <h2 className="logoText">Remy's Kitchen</h2>
            <nav className="navigation">
                <li>Home</li>
                <li>About</li>
            </nav>     
            </div>
        );
    }


export default Header;