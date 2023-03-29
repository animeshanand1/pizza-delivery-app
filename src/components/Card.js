import React, { useState } from "react";
import pizzas from "../data";
import {Modal }from "react-bootstrap";

function Card({ pizza }) {
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="card col-md-5 shadow-lg p-3 mb-5 bg-body rounded"
      style={{ width: "18rem" }}
    >
      <img onClick={handleShow}
        src={pizza.image}
        className="card-img-top"
        alt="..."
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.description}</p>
        <div className="flex-container">
          <div className="w-100">
            <p>Variants</p>
            <select
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
            >
              {pizza.variants.map((variant) => {
                return <option>{variant}</option>;
              })}
            </select>
          </div>
          <div className="w-100">
            <p>Quantity</p>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((x, i) => {
                return <option>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex-container">
          <div className="m-1 w-100 mt-1">
            <p>Price:{pizza.prices[0][variant] * quantity} Rs/-</p>
          </div>
          <div className="m-1 w-100">
            <button
              className="btn"
              style={{
                color: "white",
                backgroundColor: "red",
                fontSize: "0.8rem",
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza. name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} style={{height:'300px'}}/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Card;
