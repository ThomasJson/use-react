import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./cart.scss";
import { useEffect } from "react";

const Cart = ({ cartCounter }) => {
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   alert("Alerte aux gogoles");
  // }, [cartCounter]);

  // le premier paramètres d'un useEffect est une fonction,
  // le deuxième est un tableau de dépendances,
  // Ici, l'alerte se déclenche après que cartCounter soit re-render

  // useEffect(() => {
  //   alert("Welcome to the Jungle");
  // }, [show]);

  useEffect(() => {
    document.title = `Nb dans le panier : ${cartCounter} item`;
    localStorage.setItem("counter", JSON.stringify(cartCounter));
    const savedCounter = localStorage.getItem("counter");
    localStorage.setItem("savedCounter", JSON.parse(savedCounter));

  }, [cartCounter]);

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
