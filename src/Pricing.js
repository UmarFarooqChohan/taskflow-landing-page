import React from "react";

export default function Pricing({ title, price, features }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center border hover:shadow-xl transition">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-semibold text-indigo-500 mb-4">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="text-gray-600">{f}</li>
        ))}
      </ul>
      <button className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition">
        Choose Plan
      </button>
    </div>
  );
}
