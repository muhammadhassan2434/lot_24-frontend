import React from 'react';

const CartTable = ({ items }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const grossPrice = parseFloat(item.grossPrice) || 0; // Ensure it's a valid number
      return total + grossPrice;
    }, 0);
  };
  

  return (
    <table className="w-full border-collapse border">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border-gray-300 text-left">Name</th>
          <th className="px-4 py-2 border-gray-300 text-left">Price</th>
          <th className="px-4 py-2 border-gray-300 text-left">Quantity</th>
          <th className="px-4 py-2 border-gray-300 text-left">VAT</th>
          <th className="px-4 py-2 border-gray-300 text-left">Gross Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td className="px-4 py-2 border border-gray-300">{item.name}</td>
            <td className="px-4 py-2 border border-gray-300 text-left">{item.price}</td>
            <td className="px-4 py-2 border border-gray-300 text-left">{item.quantity}</td>
            <td className="px-4 py-2 border border-gray-300 text-left">{item.vat}</td>
            <td className="px-4 py-2 border border-gray-300 text-left">{item.grossPrice}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4" className="px-4 py-2 border border-gray-300 text-right font-bold">
            Total
          </td>
          <td className="px-4 py-2 border border-gray-300 text-left font-bold">
            PLN {calculateTotal().toFixed(2)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
