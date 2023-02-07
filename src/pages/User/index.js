import React from "react";
import { Link } from "react-router-dom";
function ListUser() {
    return (
        <>
            <div>ListUsers</div>
            <p>
                <Link to="/Users/user/1">user 1</Link>
            </p>
            <p>
                <Link to="/Users/user/2">user 2</Link>
            </p>
            <p>
                <Link to="/Users/user/3">user 3</Link>
            </p>
        </>
    );
}

export default ListUser;
