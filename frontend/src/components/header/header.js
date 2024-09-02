import React from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; 


const Header = () => {
    const handleReload = () => {
        window.location.reload(); // This reloads the page
    };
    // const deleteKeeper = (id)  => {
    //     axios.post("http://localhost:3001/api/delete", { id })
    //     .then(res => setKeeperList(res.data))
    // }
    return (
        <div className="header flex">
            <h1>Keep Notes <FontAwesomeIcon icon={faPencilAlt} /></h1>
            <button onClick={handleReload} >New Note</button>
        </div>
    );
}

export default Header;
