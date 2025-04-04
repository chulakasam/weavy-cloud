import {useState} from "react";

export default function UserManage(){
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ fullname: "",firstname:"",lastname:"",familyname:"",nickname:"",email: "" ,phone:"",comment:""});

    function handleCreateUser(){

    }
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">User Management</h2>

            {/* Create User */}
            <div className="my-4">
                <input
                    type="text"
                    placeholder="Full name"
                    value={newUser.fullname}
                    onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
                /><br/>
                <input
                    type="text"
                    placeholder="first Name"
                    value={newUser.firstname}
                    onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })}
                /><br/>
                 <input
                    type="text"
                    placeholder="last Name"
                    value={newUser.lastname}
                    onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
                /><br/>
                 <input
                    type="text"
                    placeholder="family Name"
                    value={newUser.familyname}
                    onChange={(e) => setNewUser({ ...newUser, familyname: e.target.value })}
                /><br/>
                 <input
                    type="text"
                    placeholder="nick Name"
                    value={newUser.nickname}
                    onChange={(e) => setNewUser({ ...newUser, nickname: e.target.value })}
                /><br/>
                <input
                    type="text"
                    placeholder="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                /><br/>
                <input
                    type="text"
                    placeholder="phone number"
                    value={newUser.phone}
                    onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                /><br/>
                <input
                    type="text"
                    placeholder="comment"
                    value={newUser.comment}
                    onChange={(e) => setNewUser({ ...newUser, comment: e.target.value })}
                /><br/>
                <button onClick={handleCreateUser}>Create User</button>
            </div>


        </div>
    );
};


