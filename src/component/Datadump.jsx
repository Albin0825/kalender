import React, { useState, useEffect } from 'react'

function Datadump() {
    const [item, setItem] = useState([]);
    useEffect (()=>{
        fetch("http://takeee.ntigskovde.se/login.php?username=root&password=root")
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result["Version"])
                setItem(result["Version"])
            }
        )
    }, [])
    return (
        <div>
            Taeat {item?.length>0? (
                <p>{item}</p>
            ):(
                <p>Ingen data</p>
            )}
        </div>
    )
}
export default Datadump