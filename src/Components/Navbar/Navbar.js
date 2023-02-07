import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Signup">Signup</Link>
            <Link to="/Signin">Signin</Link>
            <Link to="/Users">Users</Link>
        </nav>
    );
}

export default Navbar;
