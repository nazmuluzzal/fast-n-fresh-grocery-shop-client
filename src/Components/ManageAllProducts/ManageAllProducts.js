import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ManageAllProducts.css";

const ManageAllProducts = (props) => {
  const { _id, name, price, quantity } = props.pd;

  const deleteProduct = (event, _id) => {
    fetch(`https://serene-wave-50060.herokuapp.com/delete/` + _id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          event.target.parentNode.parentNode.style.display = "none";
        }
      });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}tk</td>
            <td>
              <button
                className="delete-btn btn btn-danger"
                onClick={(event) => deleteProduct(event, _id)}
              >
                {" "}
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProducts;
