import { fetchUsers } from "@/features/users/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    const { isLoading, users, error } = useSelector((state) => state.users)
    return (
        <div>
            <h1> Users Data Fetch From JsonPlaceholder by Redux-Toolkit</h1>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {users && users.map((user) => {
                return <div
                    key={user.id}
                    style={{border: "1px solid black", margin: "10px", width: "300px", padding:"10px"}}
                >
                    <h5>Name: {user.name}</h5>
                    <p>Email: {user.email}</p>
                </div>
            })}

        </div>
    );
};

export default Index;