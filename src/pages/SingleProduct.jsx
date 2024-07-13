import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowLeft from "../assets/icons/ArrowLeft";
import StarIcon from "../assets/icons/StarIcon";
import StarIconHalf from "../assets/icons/StarIconHalf";
import HeartIcon from "../assets/icons/HeartIcon";
import default_image from '../assets/images/default-product.jpg';
import { ShopContext } from '../context/ShopContext';

const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://timbu-get-single-product.reavdev.workers.dev/${productId}?organization_id=ed17b6f6a2e548fe9992007acb2e909b&Appid=95VNIS2NW0FIA4L&Apikey=592e71e8195d45f5af3d132ce8293f1f20240712165554452277`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    navigate("/cart");
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const baseUrl = 'https://api.timbu.cloud/images/';
  const imageUrl = product.photos && product.photos[0] && product.photos[0].url ? baseUrl + product.photos[0].url : default_image;

  return (
    <div className="flex justify-center">
      <div className="container lg:ml-24 mt-5 px-5 lg:px-0">
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <ArrowLeft />
        </div>
        <div className="mt-8">
          <h1>
            <span className="text-label-small opacity-40">Category</span>
            <span className="text-label-small mx-1">/</span>
            <span className="text-label-small">{product.name}</span>
          </h1>
        </div>
        <div className="md:flex mt-14 block">
          <div className="order-1 md:order-2 md:ml-20">
            <img src={imageUrl} alt={product.name || 'Product Image'} className="w-full" />
          </div>
          <div className="order-2 md:order-1 w-auto md:w-1/2 lg:w-auto">
            <h1 className="text-headline-large">{product.name}</h1>
            <div className="flex justify-between mt-8">
              <h1 className="text-headline-small">${product.current_price}</h1>
              <div className="flex align-bottom items-center">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIconHalf />
                <h1 className="text-body-large ml-2">
                  <span>4.6/5.0</span>
                  <span className="text-cool-grey ml-1">(556)</span>
                </h1>
              </div>
            </div>
            <div className="md:w-[440px] w-full mt-10">
              <h1 className="text-body-large">{product.description}</h1>
            </div>
            <div className="flex gap-4">
              <div className="flex h-auto items-center border border-cool-grey rounded-md text-title-small w-fit">
                <button
                  onClick={decrement}
                  className="w-[20px] text-center justify-center mb-1 ml-2"
                >
                  -
                </button>
                <input
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-16 p-2 text-center focus:outline-none"
                />
                <button
                  onClick={increment}
                  className="w-[20px] text-center mb-1 mr-2"
                >
                  +
                </button>
              </div>
              <button className="bg-verdigris text-white text-label-medium p-5 rounded-md" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
            <h1 className="text-body-large mt-8">
              <span className="mr-2">Free 3-5 day shipping</span>
              <span className="mx-2">• Tool-free assembly</span>
              <span className="mx-2">• 30-day trial</span>
            </h1>
            <div className="flex gap-4 mt-10 cursor-pointer">
              <HeartIcon />
              <h1 className="text-label-medium text-verdigris">Add to wishlist</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
