import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import SideNavBar from "../SideNavBar/SideNavBar";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const productData = {
      imageURL: imageURL,
      name: data.name,
      quantity: data.quantity,
      price: data.price,
    };
    const url = `http://localhost:5000/addProducts`;
    console.log(productData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side res", res));
  };

  const handleImageUpload = (product) => {
    console.log(product.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "8293c63ead88635451cbd3c79e5da343");
    imageData.append("image", product.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <SideNavBar></SideNavBar>
        </div>
        <div className="add-container col-md-8">
          <h3>Add Product</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              name="name"
              defaultValue="Product Name"
              ref={register}
            />
            <br />
            <input
              className="form-control"
              name="quantity"
              defaultValue="kg/gm"
              ref={register}
            />
            <br />
            <input
              className="form-control"
              name="price"
              defaultValue="price"
              ref={register}
            />
            <br />

            <input
              className="form-control"
              name="exampleRequired"
              type="file"
              onChange={handleImageUpload}
            />

            <br />
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              className="add-btn btn btn-success"
              value="Add Product"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
