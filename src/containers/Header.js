import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/">
          <h2>Online Shop</h2>
        </Link>
      </div>
    </div>
  );
}
