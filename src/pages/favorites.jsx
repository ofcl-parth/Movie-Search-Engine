import React from "react";
import "../css/Favorites.css";

function Favorites() {
  return (
    <>
      <div className="favorites-empty">
        <div className="favorites">
          <h2>No Favorite Movies Yet</h2>
          <p>
            Start Adding movies to your favorites and they will appear here!
          </p>
        </div>
      </div>
    </>
  );
}

export default Favorites;
