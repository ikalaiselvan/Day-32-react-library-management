import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  
  let navigate = useNavigate();

  let handleDelete = (i) => {
    let newData = [...props.data.library];
    newData.splice(i, 1);
    props.data.setLibrary(newData);
  };


    let data = props.data.library.filter((e) => {return(e.status === "Available")});

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        {/*
     <!-- Main Content --> */}
        <div id="content">
          {/*
       <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/*
         <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Home</h1>
            </div>

            {/*
         <!-- Content Row --> */}
            <div className="row">
              {/*
           <!-- Books count --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Number of books in library
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          Books : {props.data.library.length}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*
           <!-- Available books count --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Available books in library
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          Books :    {data.length}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Library Dashboard table */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Library Dashboard</h1>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Status</th>
                <th>Available books</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.data.library.map((user, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {i + 1}
                      {/* {console.log(user)} */}
                    </td>
                    <td>{user.title}</td>
                    <td>{user.author}</td>
                    <td>{user.genre}</td>
                    <td>{user.stock}</td>
                    <td>{user.status}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/edit-library/${i}`)}
                      >
                        {" "}
                        <EditIcon />
                        Edit
                      </Button>
                      &nbsp;
                      <Button variant="danger" onClick={() => handleDelete(i)}>
                        <DeleteIcon />
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
