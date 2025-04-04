import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import {createUser, deleteUser, getAllUsers} from "../reducer/UserSlice.ts";

export default function UserManage() {
    const [newUser, setNewUser] = useState({
        fullname: "",
        firstname: "",
        lastname: "",
        familyname: "",
        nickname: "",
        email: "",
        phone: "",
        comment: "",
    });
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const [selectedUser, setSelectedUser] = useState<any>(null);

    function handleCreateUser() {
        if (!newUser.fullname || !newUser.email) {
            setError("Full name and email are required.");
            return;
        }

        dispatch(createUser(newUser));
        setNewUser({
            fullname: "",
            firstname: "",
            lastname: "",
            familyname: "",
            nickname: "",
            email: "",
            phone: "",
            comment: "",
        });
        setError("");
    }

    function handleDeleteUser(email:string){
        dispatch(deleteUser(email));
    }
    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">User Management</h2>

            {error && <p className="text-red-500">{error}</p>}

            <div className="my-4 space-y-3">
                <label className="block">Full Name</label>
                <input
                    type="text"
                    placeholder="Full name"
                    value={newUser.fullname}
                    onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                    <br/>
                <label className="block">First Name</label>
                <input
                    type="text"
                    placeholder="First Name"
                    value={newUser.firstname}
                    onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                <br/>
                <label className="block">Last Name</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={newUser.lastname}
                    onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                <br/>
                <label className="block">Family Name</label>
                <input
                    type="text"
                    placeholder="Family Name"
                    value={newUser.familyname}
                    onChange={(e) => setNewUser({ ...newUser, familyname: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                <br/>
                <label className="block">Nickname</label>
                <input
                    type="text"
                    placeholder="Nickname"
                    value={newUser.nickname}
                    onChange={(e) => setNewUser({ ...newUser, nickname: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                <br/>
                <label className="block">Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                <br/>
                <label className="block">Phone Number</label>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={newUser.phone}
                    onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                <br/>
                <label className="block">Comment</label>
                <input
                    type="text"
                    placeholder="Comment"
                    value={newUser.comment}
                    onChange={(e) => setNewUser({ ...newUser, comment: e.target.value })}
                    className="w-full border p-2 rounded"
                />
                <br/>
                <button
                    onClick={handleCreateUser}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Create User
                </button>



            </div>
            <h3 className="font-semibold">Users</h3>
            <ul>
                {users.map((user: any) => (
                    <li key={user.email} className="flex justify-between">
                        {user.fullname} - {user.firstname}-{user.lastname}-{user.familyname}-{user.nickname}-{user.email}-{user.phone}-{user.comment}
                        <button onClick={() => handleDeleteUser(user.email)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>

            </div>
        </div>
    );
}
