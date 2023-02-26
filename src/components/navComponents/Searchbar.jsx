import React, { useState } from "react";

function Searchbar() {
  const [title, setTtile] = useState("");
  return (
    <div className="search">
      <input type="text" required value={title} onChange={(e) => setTtile(e.target.value)} />
      <div className="autoFillArea">
        <p className="inputTitle">{title}</p>
      </div>
    </div>
  );
}

export default Searchbar;
