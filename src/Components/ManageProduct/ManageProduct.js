import React, { useEffect, useState } from "react";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import SideNavBar from "../SideNavBar/SideNavBar";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const loadProducts = () => {
    fetch("https://serene-wave-50060.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <SideNavBar></SideNavBar>
        </div>
        <div className="col-md-8">
          <h3 className="mb-3">Manage product</h3>
          {products.map((pd) => (
            <ManageAllProducts key={pd._id} pd={pd}></ManageAllProducts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
