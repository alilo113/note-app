import React, { useState } from "react";
import { Link } from 'react-router-dom';

export function Header({ userProfile, handleLogout, query, setQuery  }) {
  return (
    <div className="flex justify-between items-center">
      <form className="flex gap-2 mb-4 md:mb-0 mr-10 ">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded border border-violet-500 outline-none focus:ring-2 focus:ring-violet-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
          Search
        </button>
      </form>
      {userProfile ? (
        <div className="flex gap-1">
          <Link to="/profile" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
            Profile
          </Link>
          <button onClick={handleLogout} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
            Log out
          </button>
        </div>
      ) : (
        <div className="flex gap-1">
          <Link to="/log-in" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
            Log in
          </Link>
          <Link to="/sign-up" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}