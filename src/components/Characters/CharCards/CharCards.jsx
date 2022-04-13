import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../../App.css';

const CharCards = (props) => {
  const { result } = props;
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {result.length ? (
        result
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => {
            return (
              <div className="card" key={item.char_id}>
                <Link to={`/characters/${item.char_id}`}>
                  <img src={item.img} alt={item.name} />
                  <p className="name">{item.name}</p>
                </Link>
              </div>
            );
          })
      ) : (
         <div class="container">
         <div class="loader"></div>
       </div>
      )}
    </>
  );
};

export default CharCards;