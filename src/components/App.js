import "../App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import UserList from "./UserList";
import NewUserForm from "./NewUserForm";
import EditUserForm from "././EditUserForm";
import UserMtsList from "./UserMtsList";
import MtDetail from "./MtDetail";
import Map from "./Map";
import UserRuns from "./UserRuns";

function App() {
  const navigate = useNavigate("");
  const [users, setUsers] = useState([]);
  const [mountains, setMountains] = useState([]);
  const [selectUser, setSelectUser] = useState(1);
  const [userMts, setUserMts] = useState([]);
  const [userRuns, setUserRuns] = useState([]);
  const [addMtVisible, setAddMtVisible] = useState(false);
  const [mountainDetail, setMountainDetail] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [map, setMap] = useState("");

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

  useEffect(() => {
    fetch(`http://localhost:9292/users/runs/${id}`)
      .then((res) => res.json())
      .then(setUserRuns);
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
    setMountainDetail(mountain);
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
    if (!userMts.map((mt) => mt.id).includes(mountain.id)) {
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

  const isRunUnique = (run) => {
    // console.log(mountain);
    if (!userRuns.map((r) => r.id).includes(run.id)) {
      onAddToMyRuns(run);
    }
  };

  const onAddToMyRuns = (run) => {
    // console.log(run);
    const userId = selectUser;
    const runId = run.id;
    // console.log(runId);

    const addRun = {
      user_id: userId,
      run_id: runId,
    };
    // console.log(addMt);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addRun),
    };

    fetch(`http://localhost:9292/user_runs`, options)
      .then((r) => r.json())
      .then((addRun) => {
        setUserRuns([...userRuns, addRun]);
      });
  };

  const onRemoveRun = (run) => {
    console.log(run);
    fetch(`http://localhost:9292/users/${id}/runs/${run.id}`, {
      method: "DELETE",
    });
    setUserRuns(userRuns.filter((r) => r !== run));
  };

  const onRemoveMt = (mt) => {
    console.log(mt);
  };

  const filteredMts = mountains.filter((mt) => {
    return (
      mt.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      mt.location.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  });

  const handleClickMap = (m) => {
    console.log(m);
    setMap(m.map);
    console.log(map);
  };

  return (
    <div className="App">
      <Header />
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
              mountains={filteredMts}
              // onAddToMyMts={onAddToMyMts}
              onAddToMyMts={isMtUnique}
              onViewMt={onViewMt}
              onRemoveMt={onRemoveMt}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path="map" element={<Map map={map} />} />
        <Route path="runs" element={<UserRuns />} />
        <Route
          path={`mountain_detail`}
          element={
            <MtDetail
              mountainDetail={mountainDetail}
              id={id}
              onAddToMyRuns={isRunUnique}
              userRuns={userRuns}
              onRemoveRun={onRemoveRun}
              handleClickMap={handleClickMap}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
