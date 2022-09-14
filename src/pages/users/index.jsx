import React, { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      setLoading(true);
      await fetch("https://www.melivecode.com/api/users")
        .then((res) => res.json())
        .then((res) => setUsers(res));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="/template/dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Users list</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Users</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                {/* <div className="card-header">
                  <h5 className="m-0">User list</h5>
                </div> */}
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Username</th>
                        <th>Avatar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.fname}</td>
                          <td>{user.lname}</td>
                          <td>{user.username}</td>
                          <td>{user.avatar}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
