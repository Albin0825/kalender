import React, { useState, useEffect } from 'react'

const Data = () => {
    const [item, setItem] = useState([]);
    useEffect (()=>{
        fetch("http://takeee.ntigskovde.se/login.php?username=root&password=root")
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result)
            }
        )
    }, [])
    return (
        <div>
            
        </div>
    )
}
export default Data;