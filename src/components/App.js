import "../App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserList from "./UserList";
import NewUserForm from "./NewUserForm";
import EditUserForm from "././EditUserForm";
import UserMtsList from "./UserMtsList";
import MtDetail from "./MtDetail";

function App() {
  const navigate = useNavigate("");
  const [users, setUsers] = useState([]);
  const [mountains, setMountains] = useState([]);
  const [selectUser, setSelectUser] = useState(1);
  const [userMts, setUserMts] = useState([]);
  const [addMtVisible, setAddMtVisible] = useState(false);
  const [mountainDetail, setMountainDetail] = useState([]);

  const id = parseInt(selectUser);

  // console.log(id);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/mountains")
      .then((res) => res.json())
      .then(setMountains);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/users/mountains/${id}`)
      .then((res) => res.json())
      .then(setUserMts);
  }, [id, selectUser]);

  const handleUserChange = (e) => {
    setSelectUser(e.target.value);
    // console.log(e);
  };

  const onAddMtChange = () => {
    setAddMtVisible((prev) => !prev);

    // console.log(addMtVisible);
  };

  const onViewMt = (mountain) => {
    setMountainDetail([mountain]);
  };

  const addNewUser = (newUser) => {
    // console.log(newUser);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };
    fetch("http://localhost:9292/users", options)
      .then((r) => r.json())
      .then((newUser) => {
        setUsers([...users, newUser]);
      })
      .then(navigate("/"));
  };

  const editUser = (u) => {
    // console.log(u);

    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(u),
    };
    fetch(`http://localhost:9292/users/${id}`, options)
      .then((r) => r.json())
      .then((u) => {
        setUsers(users.map((user) => (user.id === u.id ? u : user)));
      })
      .then(navigate("/"));
  };

  const isMtUnique = (mountain) => {
    // console.log(mountain);
    if (!userMts.includes(mountain)) {
      onAddToMyMts(mountain);
    }
  };

  const onAddToMyMts = (mountain) => {
    // console.log(mountain);
    const userId = selectUser;
    const mtId = mountain.id;
    // console.log(mtId);

    const addMt = {
      user_id: userId,
      mountain_id: mtId,
    };
    // console.log(addMt);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addMt),
    };

    fetch(`http://localhost:9292/user_mountains`, options)
      .then((r) => r.json())
      .then((addMt) => {
        setUserMts([...userMts, addMt]);
      });
  };

  return (
    <div className="App">
      <h1>MT TRACKS</h1>

      <Routes>
        <Route
          path="/"
          element={
            <UserList
              users={users}
              onUserChange={handleUserChange}
              selectUser={selectUser}
            />
          }
        />
        <Route
          path="new_user_form"
          element={<NewUserForm onNewUser={addNewUser} />}
        />
        <Route
          path="edit_user_form"
          element={
            <EditUserForm onEditUser={editUser} selectUser={selectUser} />
          }
        />
        <Route
          path={`user_mts_list/${id}`}
          element={
            <UserMtsList
              userMts={userMts}
              onAddMtChange={onAddMtChange}
              addMtVisible={addMtVisible}
              mountains={mountains}
              // onAddToMyMts={onAddToMyMts}
              onAddToMyMts={isMtUnique}
              onViewMt={onViewMt}
            />
          }
        />
        <Route
          path={`mountain_detail`}
          element={<MtDetail mountainDetail={mountainDetail} id={id} />}
        />
      </Routes>
    </div>
  );
}

export default App;