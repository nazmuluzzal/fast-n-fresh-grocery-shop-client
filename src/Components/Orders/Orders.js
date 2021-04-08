import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { UserContext } from "../../App";
import "./Orders.css";

const Orders = () => {
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://serene-wave-50060.herokuapp.com/orders?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [loggedInUser.email]);
  return (
    <div className="order-container">
      <h2>You have: {orders.length} orders</h2>
      {orders.map((order) => (
        <ListGroup.Item key={order._id}>
          {" "}
          <strong>Product Name: </strong>
          {order.name}
          <ListGroup.Item>
            <strong>Date: </strong>{" "}
            {new Date(order.checkIn).toDateString("dd-MM-yyyy")}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Weight: </strong> {order.quantity}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Price: </strong> {order.price}tk
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email: </strong> {order.email}
          </ListGroup.Item>
        </ListGroup.Item>
      ))}
    </div>
  );
};

export default Orders;
