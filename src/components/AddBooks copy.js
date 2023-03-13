import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function AddBooks(props) {

let [title, setTitle] = useState("");
let [author, setAuthor] = useState("");
let [genre, setGenre] = useState("");
let [stock, setStock] = useState("");
let [status, setStatus] = useState("");

  let navigate = useNavigate()

  let handleSubmit = () => {
    let newData = { title, author, genre, stock, status };
    let data = [...props.data.library]
    data.push(newData)
    props.data.setLibrary(data)
    navigate('/dashboard')
  }
  return (
    <>
      <div className="mx-auto col-10">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book Name"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Howmany books</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Enter books count"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Available/ Checked Out"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={() => handleSubmit()}>
            Add to library
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddBooks;