import './App.css';
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import { Routes, Route, Navigate } from 'react-router-dom'
import {useState} from 'react'
import EditLibrary from './components/EditLibrary';
import AddBooks from './components/AddBooks';
import { BasicForm } from './components/BasicForm';

function App() {

let data = {
earningsMonthly: "3,00,000",
earningsAnnually: "48,00,000",
task:50,
pendingRequests: 50
}

let [library, setLibrary] = useState([
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction ",
    stock: 10,
    status: "Available",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction ",
    stock: 12,
    status: "Checked Out",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction ",
    stock: 5,
    status: "Checked Out",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgeral",
    genre: "Fiction ",
    stock: 18,
    status: "Available",
  },
]);


  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<Dashboard data={{ data, library, setLibrary }} />}
          />
          <Route
            path="/add-books"
            element={<AddBooks data={{ library, setLibrary }} />}
          />

          <Route
            path="/edit-library/:id"
            element={<EditLibrary data={{ library, setLibrary }} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="basic" element={<BasicForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;