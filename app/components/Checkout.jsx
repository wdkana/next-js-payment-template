import React, { useState } from "react";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const checkout = async () => {
    alert("Checkout SNAP! 🌟")
  };

  const generatePaymentLink = async () => {
    alert("Checkout Payment Link! 🔥")
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex sm:gap-4">
          <button
            className="transition-all hover:opacity-75"
            onClick={decreaseQuantity}
          >
            ➖
          </button>

          <input
            type="number"
            id="quantity"
            value={quantity}
            className="h-10 w-16 text-black border-transparent text-center"
            onChange={quantity}
          />

          <button
            className="transition-all hover:opacity-75"
            onClick={increaseQuantity}
          >
            ➕
          </button>
        </div>
        <button
          className="rounded bg-indigo-500 p-4 text-sm font-medium transition hover:scale-105"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
      <button
        className="text-indigo-500 py-4 text-sm font-medium transition hover:scale-105"
        onClick={generatePaymentLink}
      >
        Create Payment Link
      </button>
    </>
  );
};

export default Checkout;
