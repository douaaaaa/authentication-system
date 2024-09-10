import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <form>
      <div className=" relative flex justify-between items-center gap-2 bg-input-field p-3 rounded-md">
        <input
          className=" z-10 absolute top-0 right-0 focus:border focus:border-blue-1 focus:shadow-bluexSm outline-none inset-0 bg-transparent pl-4 rounded-md"
          placeholder="Search..."
        />
        <button className=" static ml-auto z-20 inset-y-0 right-0 text-xl hover:text-blue-1 transition duration-200">
          <FiSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
