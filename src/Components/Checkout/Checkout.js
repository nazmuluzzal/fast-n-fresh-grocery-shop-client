import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { UserContext } from "../../App";
import "./Checkout.css";

const Checkout = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });
  let history = useHistory();
  const handleOrders = () => {
    const { name, price, quantity, imageURL } = product;
    const newOrders = {
      ...loggedInUser,
      name,
      price,
      quantity,
      imageURL,
      ...selectedDate,
    };
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/orders");
      });
  };
  const handleCheckInDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };

  const handleCheckOutDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkOut = date;
    setSelectedDate(newDates);
  };
  return (
    <div className="checkout-container">
      <Card className="text-center">
        <Card.Header>
          {" "}
          <h2>Checkout</h2>{" "}
        </Card.Header>
        <Card.Body>
          <Card.Title>Name: {product.name}</Card.Title>
          <Card.Text>
            Price: {product.price}, Weight: {product.quantity}
          </Card.Text>
        </Card.Body>
      </Card>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Check In Date"
            value={selectedDate.checkIn}
            onChange={handleCheckInDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Check Out Date"
            format="MM/dd/yyyy"
            value={selectedDate.checkOut}
            onChange={handleCheckOutDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <button onClick={handleOrders} className="checkout-btn btn btn-success">
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
