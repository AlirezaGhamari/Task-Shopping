"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function Search({ placeholder }: { placeholder: string }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", inputValue); // Replace this with actual search logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="ml-2 px-2 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700"
      >
        <FaSearch size={20} />
      </button>
    </form>
  );
}
