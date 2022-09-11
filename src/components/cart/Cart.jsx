import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./cart.scss";

const Cart = ({cartCounter}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return show ? (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <>
      <div className="cart">
        <FiShoppingCart onClick={handleShow} size={30} />
        <div className="articles-number">{cartCounter}</div>
      </div>
    </>
  );
};

export default Cart;
