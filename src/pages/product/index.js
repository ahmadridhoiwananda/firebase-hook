import React, { useEffect, useState } from 'react';
import { productService } from '../../services';
import { ItemComponents } from '../../components';
import './style.css';
// import { deleteCookie } from '../../utils/cookie';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    setLoginLoading(true);
    productService
      .getProduct(50, 0, '')
      .then((res) => {
        setProduct(res.data);
        console.log(product);
      })
      .catch((err) => {
        return console.log(err);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  }, []);

  // const logoutClicked = () => {
  //   deleteCookie('userData');
  //   deleteCookie('token');
  //   window.location.replace('/');
  // };

  return (
    <div>
      <div>
        <h1>
          {' '}
          Product
          {isLoginLoading}
        </h1>
      </div>
      {isLoginLoading && <p>Loading...</p>}
      {product.map((element) => {
        return <ItemComponents data={element} />;
      })}

      {/* <div>
        <button
          className="logout"
          onClick={() => {
            logoutClicked();
          }}
        >
          logout
        </button>
      </div> */}
    </div>
  );
};

export default Product;
