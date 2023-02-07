import { useParams } from "react-router-dom";
function UsersRegistered() {
    const { id } = useParams();
    return (
        <>
            <div>User:{id} Registred</div>
        </>
    );
}

export default UsersRegistered;
